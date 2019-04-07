import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';


export default class LeagueSetup extends Component {

	constructor(props){
		super(props)

		this.state = ({
			numberOfTeams: 2,
			teamSize: 5,
			errorMessage: '',
			homeAway: false,
		})

		this.handleChange = this.handleChange.bind(this);
		
		this.handleClick = this.handleClick.bind(this);

		this.handleGamesToggle = this.handleGamesToggle.bind(this);
	}


	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleClick(e) {
		this.props.saveSettings(this.state);
	}

	handleGamesToggle(e) {
		e.preventDefault();
		this.setState({ homeAway: !this.state.homeAway, })
	}

	render() {
		return (
			<Fragment>
				<div className="leagueSetup">
					<div>
						<h2>League Setup</h2>
						<p>Set your league up</p>
					</div>
				</div>
				<form className="settings">
					<div className="settingsElements">
						<label htmlFor="numberOfTeams">Number of teams</label>
						<input 
							onChange={ this.handleChange }
							value={ this.state.numberOfTeams }
							id="numberOfTeams" 
							type="number" 
							name="numberOfTeams" 
						/>
						<label htmlFor="teamSize">Number of players</label>
						<input 
							onChange={ this.handleChange }
							value={ this.state.teamSize }
							id="teamSize" 
							type="number" 
							name="teamSize" 
						/>
						<p className="errorMessage">{ this.state.errorMessage }</p>
					</div>
					<div className="buttons">
						<p>Games per opponent:</p>
						<button
							onClick={ this.handleGamesToggle }>{ !this.state.homeAway ? "One Game" : "Home and Away" }</button>
						<Link 
							to="/enter-players" 
							className="link"
							onClick={ this.handleClick }
						>Enter Players
						</Link>
					</div>
				</form>
			</Fragment>
		);
	}
}

