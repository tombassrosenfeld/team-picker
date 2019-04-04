import React, { Component } from 'react';
import Header from '../Header';
import PlayerEntry from '../PlayerEntry/';
import TeamDisplay from '../TeamDisplay/';
import ResetButton from '../Button/ResetButton';


import '../../styles/style.css';

class App extends Component {
  render() {
    return (
    	<div className="app">
	        <Header />
	        { !this.props.playersSubmitted ? 
	        	<PlayerEntry /> :
	        	<TeamDisplay /> 
	        }
	        <div className="container">
	        	<ResetButton />
    		</div>
	    </div>
    );
  }
}

export default App;
