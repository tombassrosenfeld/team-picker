import React, { Component } from 'react';
import TeamScoreElement from '../TeamScoreElement';
import Leaguetable from '../Leaguetable/';

class LeagueScreen extends Component {

	constructor(props){
		super(props)

		this.state = {
			displayFixtures: true,
			displayResults: true,
			displayLeaguetable: true,
		}
		this.handleFixturesClick = this.handleFixturesClick.bind(this);
		this.handleResultsClick = this.handleResultsClick.bind(this);
		this.handleLeagueClick = this.handleLeagueClick.bind(this);
	}


	handleFixturesClick(e) {
		this.setState({ displayFixtures: !this.state.displayFixtures });
	}

	handleResultsClick(e) {
		this.setState({ displayResults: !this.state.displayResults });
	}

	handleLeagueClick(e) {
		this.setState({ displayLeaguetable: !this.state.displayLeaguetable });
	}

	render() {
		return (
			<div className="leagueScreen container">
				<div className="container">
					<h2>Your League</h2>
				</div>
				<div className="tableContainer">
					<div className="fixturesContainer">
						<div className="fixtures">
							<div onClick={ this.handleFixturesClick } className='tableHeader clickable'>
								<h2>Fixtures</h2>
							</div>
								{
									!this.state.displayFixtures ? null :
									<table>
										<tbody>
											{ 
												this.props.fixtures.map((fixture, i) => (
													<tr key={ i }>
														<td>{ fixture }</td>
													</tr>
												))
											}
										</tbody>
									</table>
								}	
						</div>
					</div>
					<div className="resultsContainer">
						<div className="results">
							<div onClick={ this.handleResultsClick } className='tableHeader clickable'>
								<h2>Enter Results</h2>
							</div>
							{
							!this.state.displayResults ? null :
								this.props.teams.map((team, j) =>(
									<TeamScoreElement
										key={ j }
										team={ team }
										id={ j }
									/>
								))
							}
						</div>
					</div>
					<div className="leaguetableContainer">
						<div className="leaguetable">
							<div onClick={ this.handleLeagueClick } className='tableHeader clickable'>
								<h2>League-table</h2>
							</div>
							{
								!this.state.displayLeaguetable ? null :
								<Leaguetable />
							}
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default LeagueScreen;
