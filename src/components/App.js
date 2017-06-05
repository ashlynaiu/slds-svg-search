import React, { Component } from 'react';
import '../App.css';
// import IconList from './IconList';
import IconContainer from './IconContainer';
import SearchInput from './SearchInput';
import icons from '../models';

class App extends Component {
	constructor() {
		super();
		this.searchIcons = this.searchIcons.bind(this);
		this.state = {
			allIcons: icons,
			icons: ''
		}
	}

	componentDidMount(){
		this.setState({icons: icons})
	}

	searchIcons(query){
		let icons = this.state.allIcons.filter((icon) => {
			return icon.name.includes(query) || icon.keyword.includes(query)
		});
		return this.setState({icons: icons})
	}

	render() {
		return (
			<div className="sldsSVG-mainFrame">
				<h1>SLDS SVG Search</h1>
				<SearchInput searchIcons={this.searchIcons} />
				<div className="sldsSVG-imageContainer">
					{Object
						.keys(this.state.icons)
						.map(key => <IconContainer
							key={key}
							data={this.state.icons[key]}/>)
					}
				</div>
			</div>
		)
	}
}

export default App;
