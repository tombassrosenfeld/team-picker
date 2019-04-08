import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ResetButton from '../Button/ResetButton';
import Settings from '../Settings';


class PlayerEntry extends Component {

	constructor(props){
		super(props)

		this.state = ({
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

	componentDidMount(){
   this.playerName.focus(); 
}

	

	render() {

		return (
			<div className="PlayerEntry container">
				<h2>Enter your players</h2>
				<div className="formContainer">
					<form className="form" onSubmit={ this.handleSubmit }>
						<div className="formElements">
							<div className="playerInput">
								<label className="inputLabel" htmlFor="playerName">Enter { this.props.totalPlayers } player names.</label>
								<input 
									onChange={ this.handleChange }
									value={ this.state.input }
									ref={(input) => { this.playerName = input; }}
									id="playerName" 
									type="text" 
									name="playerName" 
								/>
								<p className="errorMessage">{ this.state.errorMessage }</p>
								{
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
							<div className="buttons">
								<button
									onClick={ this.handleClick }>Add Player</button>
								<Link
									to={ this.state.players.length === this.props.totalPlayers ? "/display-teams" : "/enter-players" } 
									className="button"
									onClick={ this.handleSubmit }
								>Submit players</Link>
								<ResetButton />
							</div>  
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default PlayerEntry;












