import React, { Component, } from 'react';
import ResetButton from '../Button/ResetButton';
// import '../../styles/style.css';

class TeamDisplay extends Component {

	

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
											<tr key={ i }>
													<th colSpan="2">Team { i + 1 }</th>
											</tr>
									</thead>
									<tbody>
										{
											players.map((player, j) => (
												<tr key={ j }>
													<td className="numberCol" >{ j + 1 }</td>
													<td>{ player }</td>
												</tr>
											))
										}
									</tbody>
							</table>
							</div>
						))
					}
				</div>
				<div className="teamReset">
					<ResetButton />
				</div>
			</div>
		);
	}
}

export default TeamDisplay;
