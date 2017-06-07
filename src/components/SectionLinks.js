import React, { Component } from 'react';

class SectionLinks extends Component {
	render() {
		const types = ['custom', 'utility', 'standard', 'action', 'doctype']
		return (
			<div className="sldsSectionLinks">
				{Object
					.keys(types)
					.map(key => <a key={key} href={`#${types[key]}`} className={`sldsSectionLinks--${types[key]}`}>{types[key]}</a>)
				}
				<a href="#about" className="sldsSectionLinks--about">About</a>
			</div>
		);
	}
}

export default SectionLinks;
