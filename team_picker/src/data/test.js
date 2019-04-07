
// let players = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
// let numberOfTeams = 3;
// let teams = ['0', '1', '2', '3', '4', '5', '6', '7'];


// //attempt using the team objects to extract the name. 
// let createFixtures = (state/*, opponents*/) => {


// 	let fixtures = [];
// 	for (let i = 0; i < state.teams.length - 1; i += 1){
// 		let games = state.teams.reduce((array, team, j) => j > i ? `${ state.teams[i].teamName } vs ${ team.teamName }` : null, []);
// 		fixtures = [...fixtures, ...games];
// 	}
	
// 	console.log(fixtures);
// 	return {
// 		...state,
// 		fixtures,
// 	}
// }

// // .map(teamB => `Team ${ i + 1 } vs Team${ j + 1 }`)



// let createOpponents = (teams) => {
// 	let opponents = [];
// 	for (let i = 0; i < teams.length - 1; i += 1) {
// 		opponents.push(teams.filter((teamB, j) => j > i ));
// 	};
// 	// console.log(opponents[0]);
// 	return opponents;
	
// };

// let createFixtures = (opponents, teams) => {
// 	let fixtures = [];
// 	for (let i = 0; i < teams.length - 1; i += 1){
// 		let games = (opponents[i].map((opponent, j) => `Team ${ i + 1 } vs Team ${ +opponent + 1 }`));
// 		fixtures = [...fixtures, ...games];
// 	}
	
// 	return fixtures;
// }



let teams = [
	 {
		teamName: 'Team 1',
		points: 1,
	},
	 {
		teamName: 'Team 2',
		points: 2,
	},
	 {
		teamName: 'Team 3',
		points: 3,
	},
]

let compare = (key, order = 'asc') => {
	return function(a,b) {
		const varA = a[key];
		const varB = b[key];
		console.log(a[key])
		let comparison = 0;

		if (varA > varB) {
			comparison = 1;
		
		} else if (varA < varB) {
			comparison = -1;
		}
		return (
			(order == 'desc') ? (comparison * -1) : comparison
		);
	}
};



console.log(teams.sort(compare('points', order = 'asc')));

// console.log(teams);




