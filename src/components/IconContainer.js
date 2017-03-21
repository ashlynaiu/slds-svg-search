import React, { Component } from 'react';

class IconList extends Component {
	render() {
		const { data } = this.props;
		return (
			<div className="sldsSVG-image" key={key}>
				<img src="icons/{data.url}.svg" alt="{data.name}" />
				<p>{data.name}</p>
			</div>
		);
	}
}

export default IconList;
