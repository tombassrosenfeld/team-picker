import React, { Component } from 'react';

import '../../styles/style.css';

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
				input: "", }) : this.state ) : this.setState({ errorMessage: "You have enough players!", input: "",})
	}

	handleSubmit(e) {
		
		e.preventDefault();
		this.state.players.length === this.props.totalPlayers ? this.props.savePlayers(this.state) : this.setState({ errorMessage: `You need to add ${ this.props.totalPlayers - this.state.players.length } more player${ this.props.totalPlayers - this.state.players.length !== 1 ? "s" : "" }.`});
	}

	

	render() {


			
			
    return (
	    <div className="PlayerEntry">
	    	<form className="form" onSubmit={ this.handleSubmit }>
	    		<label htmlFor="playerName">Enter { this.props.totalPlayers } player names.</label>
	    		<p>{ this.state.errorMessage }</p>
	    		<div>
	    			<input 
	    			onChange={ this.handleChange }
	    			value={ this.state.input }
	    			id="playerName" 
	    			type="text" 
	    			name="PlayerName" 
	    			/>
		    		<button
		    			onClick={ this.handleClick }>Add Player</button>
	    		</div>
	    		<button type='submit'>Submit players</button>
	    	</form>
	    	<table className="playerList">
		    	{
		    		this.state.players.map(( item, i ) => (
		    			<tbody>
				    		<tr key={ i }>
				    			<td>{ i + 1 }</td> 
				    			<td>{ item }</td>
				    		</tr>
				    	</tbody>
			    	))
		    	}
		    </table>
	    	
	    </div>
	  );
	}
}

export default PlayerEntry;












