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
					<h2 id="stayTuned">
						Stay tuned, there's more happing on this page very soon.
					</h2>
					<p>For more information, write us a mail to <a href="mailto:hello@gettrade.co">hello@gettrade.co</a></p>
					<div id="responsible">
						<h2>Responsible for this website:</h2>
						<p>
							tradeapp UG iGr<br/>
							Gerichtstr. 18<br/>
							13347 Berlin
						</p>
						<p className="light">
							Managing Director: <br/>
							Julian Bauer,<br/>
							Malte Delbrück,<br/>
							Tobias Weinmann
						</p>
					</div>

				</section>
				<div id="linkToImpressum" onClick={this.handleOpen}>Imprint</div>
			</div>
		)
	}
}
