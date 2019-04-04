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
		    <div className="Button">
		    	<button onClick={ this.handleclick }>{ this.props.label }</button>
		    </div>
	    );
	}
}

export default Button;
