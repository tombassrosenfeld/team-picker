import React, { Component } from 'react';

class Leaguetable extends Component {

	constructor(props){
		super(props)

		this.state = {

		}
	}

	render() {
			
		return (
				<table>
					<thead>
						<tr>
							<td>Team</td>
							<td>Points</td>
						</tr>
					</thead>
					<tbody>
						{
							this.props.leaguetable.map((team, i) => (
								<tr key={ i }>
									<td>{ team.teamName }</td>
									<td className="numberCol">{ team.points }</td>
								</tr>
							))
						}  
					</tbody>
				</table> 
		);
	}
}

export default Leaguetable;
