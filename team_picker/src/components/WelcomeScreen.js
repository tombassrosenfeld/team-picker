import React from 'react';
import Settings from './Settings';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const WelcomeScreen = () => (
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
				<h2>Or log in to see your league or get started with a new one.</h2>
				<div className="buttons">
					<Link 
						to="/set-up-league"
						className="link button"
					>Log In</Link>
				</div>
			</div>
		</Fragment>
	);

export default WelcomeScreen;