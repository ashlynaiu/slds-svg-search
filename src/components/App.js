import React, { Component } from 'react';
import '../App.css';
// import IconList from './IconList';
import IconContainer from './IconContainer';
import SearchInput, {createFilter} from 'react-search-input'
import icons from '../../models/action';

const KEYS_TO_FILTERS = ['name', 'keyword'];

class App extends Component {
	constructor() {
		super();
		this.state = {
			searchTerm: '',
			icons: { icons }
		}
		console.log(icons);
	}

	// getInitialState () {
	// 	return { searchTerm: '' }
	// }

	render() {
		const filteredIcons = this.state.icons.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
		return (
			<div>
				<SearchInput className="" onChange={this.searchUpdated} />
				{filteredIcons.map(this.state.icons => {
					return (
						<IconContainer key={email.id} data={this.state.icons} />
					)
				})}
			</div>
		)
	}

	searchUpdated (term) {
		this.setState({searchTerm: term})
	}
}

export default App;
