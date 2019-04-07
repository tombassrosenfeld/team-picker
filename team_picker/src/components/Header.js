import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/style.css';

class Header extends Component {

	render() {
	    return (
		    	<Link className="headerLink"
		    		to="/"
		    	>
		    <header className="Header">
			    	<div>
			    		<h1>Whose Side Are You On?</h1>
			    	</div>
		    		
		    </header>
		    	</Link>
	    );
	}
}

export default Header;
