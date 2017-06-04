import React, { Component } from 'react';
import '../App.css';
// import IconList from './IconList';
import IconContainer from './IconContainer';
import SearchInput, {createFilter} from 'react-search-input';
import icons from '../models';

const KEYS_TO_FILTERS = ['name', 'keyword', 'type'];

class App extends Component {
	constructor() {
		super();
		this.searchUpdated = this.searchUpdated.bind(this);
		this.state = {
			icons: icons,
			searchTerm: ''
		}
	}

	searchUpdated(term) {
		this.setState({searchTerm: term})
	}

	render() {
		const icons = this.state.icons;

		const filteredIcons = icons.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

		return (
			<div className="sldsSVG-mainFrame">
				<h1>SLDS Icon Search</h1>
				<SearchInput className="sldsInput" onChange={this.searchUpdated} placeholder="Search for an icon"/>
				<div className="sldsSVG-imageContainer">
					{filteredIcons.map((icon, index) => {
						return (
								<IconContainer key={index} data={icons[index]} />
						)
					})}
					</div>
			</div>
		)
	}
}

export default App;
