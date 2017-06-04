import React, { Component } from 'react';

class IconList extends Component {
	render() {
		const { data } = this.props;

		//Dynamic Image Sizing Class
		let imageClass = () => {
			if (data.type === 'custom' || data.type === 'standard') {
				return 'customIcon-image'
			}
		}

		return (
			<div className="sldsSVG-image">
				<img src={require(`../icons/${data.type}/${data.url}.svg`)} alt={data.name} className={imageClass()} />
				<p>{data.name}</p>
			</div>
		);
	}
}

export default IconList;
