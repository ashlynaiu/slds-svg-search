import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

class IconList extends Component {
	render() {
		const { data } = this.props;

		//Dynamic Classes
		let imageClass = () => {
			let list = ['custom', 'utility', 'standard', 'action', 'doctype']
			for (let k = 0; k < list.length; k++) {
				if (data.type === list[k]) {
					return 'sldsSVG-image--' + list[k]
				}
			}
		}

		//Icon Markup
		let renderIcon = () => {
			return (
				<div className={imageClass()}>
					<img src={require(`../icons/${data.type}/${data.url}.svg`)} alt={data.name} />
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
