import React, { Component } from 'react';
import '../App.css';
import IconContainer from './IconContainer';
import SearchInput from './SearchInput';
import SectionLinks from './SectionLinks';
import Sticky from './Sticky';
import WarningBanner from './WarningBanner';
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
			<div>
				<Sticky />
				<div className="sldsSVG-mainFrame">
					<WarningBanner />
					<h1>SLDS SVG Search</h1>
					<SearchInput searchIcons={this.searchIcons} />
					<SectionLinks />
					<div className="sldsSVG-imageContainer">
						{Object
							.keys(this.state.icons)
							.map(key => <IconContainer
								key={key}
								data={this.state.icons[key]}/>)
						}
					</div>
				</div>
			</div>
		)
	}
}

export default App;
