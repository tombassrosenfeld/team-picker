import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/style.css';

// takes link and label props.

class Button extends Component {

	constructor(props){
		super(props)

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		
		this.props.buttonAction();

	}

	render() {
	    return (
		    <Link 
		    	to={ this.props.link } 
		    	className="button" 
		    	onClick={ this.handleClick }
		    >{ this.props.label }</Link>
	    );
	}
}

export default Button;
