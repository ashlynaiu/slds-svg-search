import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const Footer = () => {
	return (
		<div className="sldsSVGFooter">
			<div className="sldsSVGFooter-mainFrame">
				<div className="sldsSVGFooter-mainFrame--column">
					<ScrollableAnchor id={'about'}>
						<h3>About</h3>
					</ScrollableAnchor>
						<p>These icons belong to an open source design system called the <a href="https://www.lightningdesignsystem.com/" target="_blank" rel="noopener noreferrer">Salesforce Lightning Design System</a> (also known as SLDS), built by the Salesforce UX team. Check out the <a href="https://github.com/salesforce-ux/design-system" target="_blank" rel="noopener noreferrer">Github Repository</a> for a more in-depth look at the icons and code. </p>
				</div>
				<div className="sldsSVGFooter-mainFrame--column">
					<h3>Contributing</h3>
					<p>You can contribute to this project, submit a bug, or suggest a feature by going to <a href="https://github.com/ashlynaiu/slds-svg-search" target="_blank" rel="noopener noreferrer">the Github repo</a>. </p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
