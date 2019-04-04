
let players = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
let numberOfTeams = 3;
let teams = [];









let createTeams = (players, numberOfTeams, teams) => {

	
	for (let i = 0; i < state.numberOfTeams; i += 1) {
		let team = state.players.filter((player, index) => (index % state.numberOfTeams === i ));	
		state.teams.push(team);
		
	};
	return teams;
};



createTeams(players, numberOfTeams, teams);
console.log(teams);




