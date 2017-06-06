import React, { Component } from 'react';

class WarningBanner extends Component {
	constructor() {
		super();
		this.hideBanner = this.hideBanner.bind(this)
		this.state = { isHide : false }
	}

	hideBanner(){
		return this.setState({isHide: true})
	}

	render() {
		return (
			<div className={`sldsWarning ${this.state.isHide ? 'hide' : ''}`} ng-if="warning">
				<div className="sldsWarning-close" onClick={this.hideBanner}>
					<img src={require(`../icons/action/close.svg`)} alt="close warning" />
				</div>
				<p>Please use in Safari to utilize drag and drop in sketch.<br />
					<span>Check out the <a href="https://github.com/ashlynaiu/slds-svg-search/issues/1" target="_blank">submitted git issue</a> if you'd like to track this bug.</span>
				</p>
			</div>
		);
	}
}

export default WarningBanner;
