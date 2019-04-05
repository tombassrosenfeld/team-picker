import React, { Component } from 'react';



class WelcomeScreen extends Component {

	constructor(props){
		super(props)

		this.state = ({
			numberOfTeams: 2,
			teamSize: 5,
		})

		this.handleChange = this.handleChange.bind(this);
		
		this.handleClick = this.handleClick.bind(this);
	}


	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
		console.log(this.state);
	}

	handleClick(e) {
		e.preventDefault();
		this.props.saveSettings(this.state);
	}

	render() {
	    return (
		    <div className="settings">
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
		    	</div>
		    	<div className="buttons">
		    		<button	
	    				onClick={ this.handleClick }>Generate teams</button>
		    	</div>
		    </div>
	    );
	}
}

export default WelcomeScreen;
