import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Settings extends Component {

	constructor(props){
		super(props)

		this.state = ({
			numberOfTeams: 2,
			teamSize: 5,
			errorMessage: '',
		})

		this.handleChange = this.handleChange.bind(this);
		
		this.handleClick = this.handleClick.bind(this);
	}


	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleClick(e) {
		this.props.saveSettings(this.state);
	}

	render() {
	    return (
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
		    		<Link 
		    			className="link"
		    			onClick={ this.handleClick }
		    			to="/enter-players"	
	    			>Lets go!</Link>
		    	</div>
		    </form>
	    );
	}
}

export default Settings;
