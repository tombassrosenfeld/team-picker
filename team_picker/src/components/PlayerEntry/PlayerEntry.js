import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ResetButton from '../Button/ResetButton';

// import '../../styles/style.css';

class PlayerEntry extends Component {

	constructor(props){
		super(props)

		this.state =({
			input: "",
			players: [],
			errorMessage: "",
		})

		this.handleChange = this.handleChange.bind(this);
		
		this.handleClick = this.handleClick.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ input: e.currentTarget.value });
		
	}

	handleClick(e) {
		e.preventDefault();

		return this.state.players.length < this.props.totalPlayers ? ( this.state.input ? 
			this.setState({ 
				errorMessage: "",
				players:  [this.state.input].concat(this.state.players),
				input: "", }) : this.state ) : this.setState({ errorMessage: "You have enough players!", input: "",
			}
		)
	}

	handleSubmit(e) {
		
		
		this.state.players.length === this.props.totalPlayers ? this.props.savePlayers(this.state) : this.setState({ errorMessage: `You need to add ${ this.props.totalPlayers - this.state.players.length } more player${ this.props.totalPlayers - this.state.players.length !== 1 ? "s" : "" }.`});
	}

	

	render() {

    return (
	    <div className="PlayerEntry container">
	    	<form className="form" onSubmit={ this.handleSubmit }>
	    		<div className="formElements">
	    			<div className="playerInput">
	    				<label className="inputLabel" htmlFor="playerName">Enter { this.props.totalPlayers } player names.</label>
		    			<input 
			    			onChange={ this.handleChange }
			    			value={ this.state.input }
			    			id="playerName" 
			    			type="text" 
			    			name="PlayerName" 
		    			/>
		    			<p className="errorMessage">{ this.state.errorMessage }</p>
	    			</div>
    				<div className="buttons">
			    		<button
			    			onClick={ this.handleClick }>Add Player</button>
			    		<Link
			    			className="button" 
			    			to="/display-teams"
			    			onClick={ this.handleSubmit }
			    		>Submit players</Link>
	        		<ResetButton />
	    			</div>	
	    		</div>
	    	</form>
	    	{
	    		!this.state.players ? null : 
	    		<div className="tableContainer">
			    	<table className="playerList table">
			    		<tbody>
					    	{
					    		this.state.players.map(( item, i ) => (
						    		<tr key={ i }>
						    			<td className="numberCol">{ i + 1 }</td> 
						    			<td>{ item }</td>
						    		</tr>
						    	))
					    	}
				    	</tbody>
				    </table>
	    		</div>
	    	}
	    </div>
	  );
	}
}

export default PlayerEntry;












