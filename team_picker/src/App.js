import React, { Component } from 'react';
import Header from './components/Header';
import PlayerEntry from './components/PlayerEntry';

import './styles/style.css';

class App extends Component {
  render() {
    return (
    	<div className="app_wrapper">
	    	<div className="App container">
	        <Header />
	        <PlayerEntry />
	        
	    	</div>
	    </div>
    );
  }
}

export default App;
