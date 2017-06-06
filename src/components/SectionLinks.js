import React, { Component } from 'react';

class SectionLinks extends Component {
	render() {
		const types = ['custom', 'utility', 'standard', 'action', 'doctype']
		return (
			<div className="sldsSectionLinks">
				{Object
					.keys(types)
					.map(key => <a href={`#${types[key]}`} className={`sldsSectionLinks--${types[key]}`}>{types[key]}</a>)
				}
			</div>
		);
	}
}

export default SectionLinks;
