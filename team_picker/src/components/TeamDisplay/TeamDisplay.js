import React, { Component, } from 'react';
import ResetButton from '../Button/ResetButton';
import ShuffleButton from '../Button/ShuffleButton';
import { Link } from 'react-router-dom';


class TeamDisplay extends Component {

	constructor(props) {
		super(props)

	this.handleClick = this.handleClick.bind(this);
	}




	handleClick(e) {
		this.props.startLeague();
	}

	render() {
		return (
			<div className="TeamDisplay container">
				<h1>Here are your teams!</h1>
				<div className="tableContainer">  
					{
						this.props.teams.map(({ players }, i) => (
							<div>
								<table  className="table">
									<thead>
											<tr>
													<th key={ i }>Team { i + 1 }</th>
											</tr>
									</thead>
									<tbody>
										{
											players.map((player, j) => (
												<tr >
													<td key={ j }>{ player }</td>
												</tr>
											))
										}
									</tbody>
							</table>
							</div>
						))
					}
				</div>
				<div className="formElements">
					<div className="buttons teamReset">
					<ShuffleButton />
					<ResetButton />
					<Link onClick={ this.handleClick } to="/league-dashboard">Start League</Link>
				</div>
				</div>
			</div>
		);
	}
}

export default TeamDisplay;
