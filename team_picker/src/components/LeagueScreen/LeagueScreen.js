import React, { Component } from 'react';
import TeamElement from '../TeamElement';

class LeagueScreen extends Component {

	// constructor(props){
	// 	super(props)

	// }

	render() {
		return (
			<div className="leagueScreen container">
				<h2>Your League</h2>
				<div>
					<h2>Fixtures:</h2>
						<ul>
							{
								this.props.fixtures.map((fixture, i) => (
									<li key={ i }>{ fixture }</li>
								))
							}
						</ul>
				</div>
				<div>
						{
							this.props.teams.map((team, j) =>(
								<TeamElement
									key={ j }
									team={ team }
									id={ j }
								/>
							))
						}
				</div>


			</div>
		);
	}
}

export default LeagueScreen;
