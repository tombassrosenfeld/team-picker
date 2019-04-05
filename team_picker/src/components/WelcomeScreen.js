import React from 'react';
import Settings from './Settings';

const WelcomeScreen = () => (
    <div
      className="welcomescreen container"
    >
      <h2>Welcome to Whose Side Are You On!</h2>
		  <h2>Quick Start:</h2>
		  <p>Enter the number of teams and players you require below.</p>
		  <Settings />
    </div>
  );

export default WelcomeScreen;