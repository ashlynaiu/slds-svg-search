import React, { Component } from 'react';

class Sticky extends Component {
	constructor() {
		super();
		this.scrollToTop = this.scrollToTop.bind(this)
		this.hideBar = this.hideBar.bind(this)
		this.state = { isHide : true }
	}

	hideBar(){
		if(window.scrollY < 1000) {
			return this.setState({isHide: true})
		}
		return this.setState({isHide: false})
	}

	componentDidMount(){
		window.addEventListener('scroll',this.hideBar)
	}

	componentWillUnmount(){
		window.removeEventListener('scroll',this.hideBar)
	}

	scrollToTop(){
		window.scrollTo(0, 0)
	}

	render() {
		let classHide = this.state.isHide ? 'hide' : ''
		return (
			<div className={`sldsStickyTop ${classHide}`}>
				<a onClick={this.scrollToTop}>Return to Search</a>
			</div>
		);
	}
}

export default Sticky;
