import React, { Component } from 'react';
import Header from '../Header';
import PlayerEntry from '../PlayerEntry/';
import TeamDisplay from '../TeamDisplay/';
import WelcomeScreen from '../WelcomeScreen';




import '../../styles/style.css';

class App extends Component {
  render() {
    return (
    	<div className="app">
	        <Header />
	        <WelcomeScreen />
	        { !this.props.playersSubmitted ? 
	        	<PlayerEntry /> :
	        	<TeamDisplay /> 
	        }
	    </div>
    );
  }
}

export default App;
