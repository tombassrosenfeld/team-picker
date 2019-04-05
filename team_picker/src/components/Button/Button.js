import React, { Component } from 'react';

import '../../styles/style.css';

class Button extends Component {

	constructor(props){
		super(props)

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.props.buttonAction();
	}

	render() {
	    return (
		    <button className="button" onClick={ this.handleClick }>{ this.props.label }</button>
	    );
	}
}

export default Button;
