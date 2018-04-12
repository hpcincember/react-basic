import React from 'react';
import PropTypes from 'prop-types';
export class Home extends React.Component {
 	render() {
 		return(
 			<div>
 				<h1>Component here</h1>
 				<p> Your name is  {this.props.name}</p>
 				<p>{ this.props.children }</p>
 			</div>
		);
 	}
}

Home.propTypes = {
	name : PropTypes.string,
	children: PropTypes.element.isRequired
}