import './index.styl';
import React from 'react';
import classNames from 'classnames';
// import scrollTo from 'scroll-to';

// Base Component

export default class Start extends React.Component {

	// constructor(props) {
	// 	super(props);
	// 	this.state = ({ isImprintVisible: false });
	// 	this.handleClick = this.handleClick.bind(this);
	// }
	//
	// handleClick() {
	//
	// 	var windowHeight = window.innerHeight;
	//
	// 	this.setState({ isImprintVisible: true });
	//
	// 	scrollTo(0, windowHeight, {
	// 		ease: 'inOutExpo',
	// 		duration: 800
	// 	});
	// }

	render() {

		// const cx = classNames({ isVisible: this.state.isImprintVisible });

		return (
			<div>
				<section id="start">
					<div id="logo"></div>
				</section>
			</div>
		)
	}
}
