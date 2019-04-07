import React, { Component } from 'react';

class Leaguetable extends Component {

	constructor(props){
		super(props)

	}

	render() {
			
		return (
			<div className="leaguetable">
				<table>
					{
						this.props.leaguetable.map((team, i) => (
							<tr key={ i }>
								<td>{ team.teamName }</td>
								<td>{ team.points }</td>
							</tr>
						))
					}  
				</table> 
			</div>
		);
	}
}

export default Leaguetable;
