import React, { Component } from 'react';

import '../../styles/style.css';

class PlayerEntry extends Component {

	constructor(props){
		super(props)

		this.state ={
			input: "",
			players: [],
		}

		this.handleChange = this.handleChange.bind(this);
		
		this.handleClick = this.handleClick.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(e) {
		this.setState({ input: e.currentTarget.value });
		console.log(this.state.input);
	}

	handleClick(e) {
		e.preventDefault();
		this.setState({ 

			players: this.state.input ? [this.state.input].concat(this.state.players) : this.state.players,
			input: "",

		});
		console.log(this.state.players);

	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.savePlayers(this.state.players);
	}



	render() {
	    return (
		    <div className="PlayerEntry">
		    	<form className="form" onSubmit={ () => this.handleSubmit }>
		    		<label htmlFor="playerName">Please enter your player names.</label>
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
		    		<button type="submit">Submit players</button>
		    	</form>

		    	<ol className="playerList">
			    	{
			    		this.state.players.map(( item, i ) => (
				    		<li key={ item, i } className="listItem">
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












