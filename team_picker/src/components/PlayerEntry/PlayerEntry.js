import React, { Component } from 'react';

import '../../styles/style.css';

class PlayerEntry extends Component {

	constructor(props){
		super(props)

		this.state =({
					input: "",
					players: [],
					message: `Please enter ${ this.props.totalPlayers } player names.`,
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

		this.setState({ 
			 
			players: this.state.input && this.state.players.length < this.props.totalPlayers ? [this.state.input].concat(this.state.players) : { message: "You have all the players you need!"},
			input: "",


		});
	}

	handleSubmit(e) {
		
		e.preventDefault();
		this.state.players.length === this.props.totalPlayers ? this.props.savePlayers(this.state) : this.setState({ message: `You need to add ${ this.props.totalPlayers - this.state.players.length } more player${ this.props.totalPlayers - this.state.players.length !== 1 ? "s" : "" }.`});
	}

	

	render() {


			
			
    return (
	    <div className="PlayerEntry">
	    	<form className="form" onSubmit={ this.handleSubmit }>
	    		<label htmlFor="playerName">{ this.state.message }</label>
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
	    	<ol className="playerList">
		    	{
		    		this.state.players.map(( item, i ) => (
			    		<li key={ i } className="listItem">
			    			{ i + 1 } { item }
			    		</li>
			    	))
		    	}
		    </ol>
	    	
	    </div>
	  );
	}
}

export default PlayerEntry;












