import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/style.css';

class Header extends Component {

	render() {
	    return (
		    <header className="Header">
			    	<div>
		    	<Link className="headerLink"
		    		to="/"
		    	>
			    		<h1>Whose Side Are You On?</h1>
		    	</Link>
			    	</div>
		    		
		    </header>
	    );
	}
}

export default Header;
