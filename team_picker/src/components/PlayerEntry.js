import React, { Component } from 'react';

import '../styles/style.css';

class PlayerEntry extends Component {

	constructor(props){
		super(props)

		this.state = {
			input: "",
			players: [],
		}

		this.handleChange = this.handleChange.bind(this);
		
		this.handleClick = this.handleClick.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(e) {
		this.setState({ input: e.currentTarget.value });
	}

	handleClick() {
		this.setState({ 
			players: [this.state.input].concat(this.state.players),
			input: "",

		});
		console.log(this.state.players)

	}

	handleSubmit() {
		console.log(this.state);
	}



	render() {
	    return (
		    <div className="PlayerEntry">
		    	<form className="form" onSubmit={ () => this.handleSubmit }>
		    		<label htmlFor="playerName">Please enter your player names.</label>
		    		<input 
		    			onChange={ this.handleChange }
		    			id="playerName" 
		    			type="text" 
		    			name="PlayerName" 
		    			value={this.state.input}/>

		    		<button
		    			onSubmit={ this.state.input ? this.handleClick : null }>Add Player</button>
		    	</form>

		    	<ol className="playerList">
			    	{
			    		this.state.players.map(( i ) => (
				    		<li key={ i } className="listItem">
				    			{ i }
				    		</li>
				    	))
			    	}
			    </ol>
		    	
		    </div>
	    );
	}
}

export default PlayerEntry;












