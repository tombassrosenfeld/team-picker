
let players = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
let numberOfTeams = 3;
let teams = ['0', '1', '2', '3', '4', '5', '6', '7'];


//attempt using the team objects to extract the name. 
let createFixtures = (state/*, opponents*/) => {


	let fixtures = [];
	for (let i = 0; i < state.teams.length - 1; i += 1){
		let games = state.teams.reduce((array, team, j) => j > i ? `${ state.teams[i].teamName } vs ${ team.teamName }` : null, []);
		fixtures = [...fixtures, ...games];
	}
	
	console.log(fixtures);
	return {
		...state,
		fixtures,
	}
}

// .map(teamB => `Team ${ i + 1 } vs Team${ j + 1 }`)



let createOpponents = (teams) => {
	let opponents = [];
	for (let i = 0; i < teams.length - 1; i += 1) {
		opponents.push(teams.filter((teamB, j) => j > i ));
	};
	// console.log(opponents[0]);
	return opponents;
	
};

let createFixtures = (opponents, teams) => {
	let fixtures = [];
	for (let i = 0; i < teams.length - 1; i += 1){
		let games = (opponents[i].map((opponent, j) => `Team ${ i + 1 } vs Team ${ +opponent + 1 }`));
		fixtures = [...fixtures, ...games];
	}
	
	return fixtures;
}



console.log(createFixtures(createOpponents(teams), teams));

// console.log(teams);




