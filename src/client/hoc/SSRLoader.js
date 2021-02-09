import React, { Component } from "react";
import { SrrConsumer } from "../context/SSRContext";
import ReactMarkdown from "react-markdown";
import { findDOMNode } from "react-dom";
import { connect } from "react-redux";
import { addToModuleList } from "../actions";

class SrrComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			module: null,
			srrData: props.callback && props.callback(this.props)
		};
	}
	async getComponent() {
		await this.props
			.module()
			.then(res => {
				this.setState({
					module: res
				});
				this.props.addToModuleList({
					id: this.props.webpackChunkName,
					component: res.default
				});
			})
			.catch(err => {
				console.log("err", err);
			});
	}
	componentDidMount() {
		if (this.props.lazyload) {
			setTimeout(() => {
				this.initLazyLoad();
			}, 500);

			window.addEventListener(
				"scroll",
				this.debounce(this.initLazyLoad, 200).bind(this)
			);
		} else {
			this.getComponent();
		}
	}
	initLazyLoad() {
		if (this.state.module) {
			window.removeEventListener(
				"scroll",
				() => {
					console.log("Lazy component loaded");
				},
				false
			);
		} else {
			const component = findDOMNode(this);

			if (
				this.isInViewport(component, this.props.offset) &&
				this.isVisible(component)
			) {
				this.getComponent();
			}
		}
	}
	debounce(fn, time) {
		let timeout;
		return function() {
			const functionCall = () => fn.apply(this, arguments);
			clearTimeout(timeout);
			timeout = setTimeout(functionCall, time);
		};
	}
	isInViewport(el, offset = 0) {
		const rect = el.getBoundingClientRect();
		const windowHeight =
			window.innerHeight || document.documentElement.clientHeight;
		const windowWidth =
			window.innerWidth || document.documentElement.clientWidth;
		const vertInView =
			rect.top - offset <= windowHeight && rect.top + rect.height + offset >= 0;
		const horInView =
			rect.left - offset <= windowWidth && rect.left + rect.width + offset >= 0;

		return vertInView && horInView;
	}

	isVisible(el) {
		return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	}
	hasComponent(list, itemName) {
		function isComponent(item) {
			return item.id === itemName;
		}
		const comp = list.find(isComponent);
		if (comp) return comp.component;
	}

	render() {
		let cleanProps = { ...this.props };
		delete cleanProps.webpackChunkName;
		delete cleanProps.module;
		delete cleanProps.callback;
		delete cleanProps.ssr;
		delete cleanProps.uniqueId;

		const createMarkup = id => {
			if (typeof document === "undefined") return null;
			return {
				__html: document.getElementById(id)
					? document.getElementById(id).innerHTML
					: null
			};
		};

		/*server side*/

		if (this.state.srrData) {
			return <template>{this.state.srrData.webpackChunkName}</template>;
		}

		/*async*/
		if (this.props.moduleList && this.props.moduleList.length) {
			const AsyncComponent = this.hasComponent(
				this.props.moduleList,
				this.props.webpackChunkName
			);
			if (AsyncComponent) return <AsyncComponent {...cleanProps} />;
		}

		if (this.state.module) {
			const AsyncComponent = this.state.module.default;
			return <AsyncComponent {...cleanProps} />;
		}

		/*sync first render*/

		const markup = createMarkup(this.props.uniqueId);
		if (markup.__html)
			return <ReactMarkdown source={markup.__html} escapeHtml={false} />;

		/*lazyload*/

		if (this.props.lazyload) {
			return this.props.loadingMessage || <span />;
		}

		return null;
	}
}

class Loader extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const props = this.props;

		if (this.props.ssr) {
			return (
				<div id={props.uniqueId}>
					<SrrConsumer>
						{({ handleChange }) => (
							<SrrComponent callback={handleChange} {...props} />
						)}
					</SrrConsumer>
				</div>
			);
		}
		return <SrrComponent {...props} />;
	}
}

function mapStateToProps({ moduleList }) {
	return { moduleList };
}

export default connect(
	mapStateToProps,
	{ addToModuleList }
)(Loader);
