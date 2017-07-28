import React, { Component } from 'react';

class SearchInput extends Component {
	constructor() {
		super()
		this.handleSearch = this.handleSearch.bind(this)
		this.inputClear = this.inputClear.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.state = {
			valueAttr: '',
			hideClear: true
		}
	}

	//Send the query back for icon filtering
	handleSearch(event) {
		this.props.searchIcons(event.target.value)
		if (event.target.value.length > 0) {
			 return this.setState({hideClear: false})
		}
		return this.setState({hideClear: true})
	}

	//Store value for clearing
	handleChange(event) {
		this.setState({valueAttr: event.target.value})
	}

	//Clear search fields and icon filtered list
	inputClear() {
		this.setState({
			valueAttr: '',
			hideClear: true
		})
		this.props.searchIcons('')
	}

	render() {
		let classHide = this.state.hideClear ? 'hide' : 'show'

		return (
			<div className="sldsInput">
					<a onClick={this.inputClear} className={`sldsInput-clear ${classHide}`} ><img src={require(`../icons/action/close.svg`)} alt="close warning" /></a>
					<input type="text" onKeyUp={this.handleSearch} value={this.state.valueAttr} onChange={this.handleChange} placeholder="Search for an icon"/>
			</div>
		);
	}
}

export default SearchInput;
