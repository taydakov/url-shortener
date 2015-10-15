/* Static dependencies */

/* JS dependencies */
import React from 'react';

export default class MainTitle extends React.Component {

	constructor (...args) {
		super(...args);

		this.state = {
		};
	}

	render () {
		return (
			<div className="urlshortener-label">Url Shortener</div>
		);
	}

};

MainTitle.propTypes = {
};