import React, { Component } from 'react';

class TeamElement extends Component {

	constructor(props){
		super(props)

		this.state = {
			id: this.props.id,
			points: this.props.team.points,

		}

		this.handleWin = this.handleWin.bind(this);
		this.handleDraw = this.handleDraw.bind(this);

	}

	handleWin(e) {

		this.props.updateTeamWin(this.state);
		this.setState({ points: this.props.team.points,});
	
	}

	handleDraw(e) {
		
		this.props.updateTeamDraw(this.state);
		this.setState({ points: this.props.team.points,});
	}

	

	render() {

	    return (
		    <div className="TeamElement">
		    	<h2>{ this.props.team.teamName }</h2>
		    	<h2>{ this.props.team.points }</h2>

		    	<button 
		    		onClick={ this.handleWin }
		    	>Win</button>
				<button 
		    		onClick={ this.handleDraw }
		    	>Draw</button>

		    </div>
	    );
	}
}

export default TeamElement;
