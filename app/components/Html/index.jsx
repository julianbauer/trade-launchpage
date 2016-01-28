import './index.styl';
import React from 'react';
import classNames from 'classnames';
// import scrollTo from 'scroll-to';

// Base Component

export default class Html extends React.Component {

	constructor(props) {
		super(props);
		this.state = ({ isImprintVisible: false });
		this.handleClose = this.handleClose.bind(this);
		this.handleOpen = this.handleOpen.bind(this);
	}

	handleOpen() {
		this.setState({ isImprintVisible: true });
	}

	handleClose() {
		this.setState({ isImprintVisible: false });
	}

	render() {

		const cx = classNames({ imprintIsVisible: this.state.isImprintVisible });

		return (
			<div id="page" className={cx}>
				<section id="start">
					<div id="logo"></div>
				</section>
				<section id="impressum">
					<div id="closeImpressum" onClick={this.handleClose}></div>
					<h2>Responsible for this website:</h2>
					<p>
						tradeapp UG iGr<br/>
						Gerichtstr. 18<br/>
						13347 Berlin
					</p>
					<p className="light">
						Geschäftsführer: <br/>
						Julian Bauer,<br/>
						Tobias Weinmann
					</p>
				</section>
				<div id="linkToImpressum" onClick={this.handleOpen}>Imprint</div>
			</div>
		)
	}
}
