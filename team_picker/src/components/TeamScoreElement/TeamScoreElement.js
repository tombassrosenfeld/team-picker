import React, { Component, Fragment } from 'react';

class TeamScoreElement extends Component {

	constructor(props){
		super(props)

		this.state = {
			id: this.props.id,
			points: this.props.team.points,
			showPlayers: false,

		}

		this.handleWin = this.handleWin.bind(this);
		this.handleDraw = this.handleDraw.bind(this);
		this.handleClick = this.handleClick.bind(this);

	}

	handleWin(e) {

		this.props.updateTeamWin(this.state);
		this.setState({ points: this.props.team.points,});
	
	}

	handleDraw(e) {
		
		this.props.updateTeamDraw(this.state);
		this.setState({ points: this.props.team.points,});
	}

	handleClick(e) {
		e.stopPropagation()
		this.setState({ showPlayers: !this.state.showPlayers, })
	}

	

	render() {

		return (
			<Fragment>
				<div className="teamScoreElement clickable">
					<div onClick={ this.handleClick } >	
						<h2>{ this.props.team.teamName }</h2>
						{ 
			    	!this.state.showPlayers ? null :
				    	<ul> 
				    		{
						    	this.props.team.players.map((player, i) => (
						    		<li key={ i }>{ player }</li>
					    		))
				    		}
				    	</ul>
						}
					</div>
					<div className="buttons">
						<button 
						onClick={ this.handleWin }
					>Win</button>
					<button 
						onClick={ this.handleDraw }
					>Draw</button>
					</div>
					
				</div>
				
			</Fragment>
		);
	}
}

export default TeamScoreElement;
