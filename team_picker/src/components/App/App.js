import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


import Header from '../Header';
import PlayerEntry from '../PlayerEntry/';
import TeamDisplay from '../TeamDisplay/';
import WelcomeScreen from '../WelcomeScreen';
import FourOhFour from '../FourOhFour';




import '../../styles/style.css';

class App extends Component {
  render() {

	return (
		<Router>
			<div className="app">
				<Header />
				<Switch>
					<Route exact path="/" component={ WelcomeScreen } />
					<Route exact path="/enter-players" component={ PlayerEntry } />
					<Route exact path="/display-teams" component={ TeamDisplay } />
					<Route component={ FourOhFour } />
				  </Switch>
					{/*<Footer />*/}
			</div>
			</Router>
	);
  }
}

export default App;
