import React, { Component } from 'react';

class IconList extends Component {
	render() {
		const { data } = this.props;

		return (
			<div className="sldsSVG-image">
				<img src={require(`../icons/${data.type}/${data.url}.svg`)} alt={data.name} />
				<p>{data.name}</p>
			</div>
		);
	}
}

export default IconList;
