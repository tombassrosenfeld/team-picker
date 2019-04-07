import React from 'react';
import Settings from '../Settings';
import { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


class WelcomeScreen extends Component {

	
	render() {
	    return (
		    <Fragment>
			<div
				className="welcomescreen container"
			>
				<div className="container">
					<h2>Welcome to Whose Side Are You On!</h2>
					<h2>Quick Start:</h2>
					<p>Enter the number of teams and players you require below.</p>
				</div>
				<Settings />
			</div>
			<div className="formElements">
				<h2>Or go to your league dashboard:</h2>
				<div className="buttons">
					<Link 
						to={ this.props.teams? "/league-dashboard" : "#0"}
						className="link button"
					>My League</Link>
				</div>
			</div>
		</Fragment>
	    );
	}
}

export default WelcomeScreen;
