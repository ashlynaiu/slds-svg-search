import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

class IconList extends Component {
	render() {
		const { data } = this.props;

		//Dynamic Image Sizing Class
		let imageClass = () => {
			if (data.type === 'custom' || data.type === 'standard') {
				return 'customIcon-image'
			}
		}

		//Icon Markup
		let renderIcon = () => {
			return (
				<div className="sldsSVG-image">
					<img src={require(`../icons/${data.type}/${data.url}.svg`)} alt={data.name} className={imageClass()} />
					<p>{data.name}</p>
				</div>
			)
		}

		//Title Markup
		let renderTitle = () => {
			return (
				<ScrollableAnchor id={`${data.name}`}>
					<h3>{data.name} Icons</h3>
				</ScrollableAnchor>
			)
		}

		//Determine if item is title or icon and render
		if (data.type === 'title') {
			return renderTitle()
		}
		else {
			return renderIcon()
		}
	}
}

export default IconList;
