import React, { Component } from 'react';

class Sticky extends Component {
	constructor() {
		super();
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

	render() {
		let classHide = this.state.isHide ? 'hide' : ''
		return (
			<div className={`sldsStickyTop ${classHide}`}>
				<a href="#header">
					<img src={require(`../icons/utility/chevronup.svg`)} alt="Return to Search" />
					<span>Return to Search</span>
				</a>
			</div>
		);
	}
}

export default Sticky;
