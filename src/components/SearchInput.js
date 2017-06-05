import React, { Component } from 'react';

class SearchInput extends Component {
	constructor() {
		super()
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(event) {
		this.props.searchIcons(event.target.value)
	}

	render() {
		return (
			<div className="sldsInput">
				<input type="text" onKeyUp={this.handleSearch} placeholder="Search for an icon"/>
			</div>
		);
	}
}

export default SearchInput;
