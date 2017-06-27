import React, { Component } from 'react';
import IconContainer from './IconContainer';
import SearchInput from './SearchInput';
import SectionLinks from './SectionLinks';
import Sticky from './Sticky';
import WarningBanner from './WarningBanner';
import Footer from './Footer';
import icons from '../models';

class App extends Component {
	constructor() {
		super();
		this.searchIcons = this.searchIcons.bind(this)
		this.state = {
			allIcons: icons,
			hideTitle: 'show',
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
		//Decide if titles should be hidden
		let isSearching = (icons.length <= 600) ? 'hide' : 'show'
		return this.setState({icons: icons, hideTitle: isSearching})
	}

	render() {
		return (
			<div>
				<div className="sldsSVG-background">
					<Sticky />
					<div className="sldsSVG-mainFrame">
						<div className="sldsSVG-header">
							<WarningBanner />
							<h1>SLDS SVG Search</h1>
							<SearchInput searchIcons={this.searchIcons} />
							<SectionLinks />
						</div>
						<div className="sldsSVG-imageContainer">
							{Object
								.keys(this.state.icons)
								.map(key => <IconContainer
									key={key}
									hideTitle={this.state.hideTitle}
									data={this.state.icons[key]}/>)
							}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default App;
