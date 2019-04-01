import React, { Component } from 'react';

import '../styles/style.css';

class Header extends Component {

	constructor(props){
		super(props)

	}

	render() {
	    return (
		    <header className="Header">
		    	<div>
		    		<h1>Whose Side Are You On?</h1>
		    	</div>
		    		
		    </header>
	    );
	}
}

export default Header;
