import initial from './initial';


let shuffle = (array) => {
  var i = 0, j = 0, temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array;
};

let submitPlayers = (state, { players }) => {
	return ({
			...state,
			players,
			teams: [],
		});
};

let playerShuffle = (state) => {
	return {
		...state,
		players: shuffle(state.players),
	}
}

let createTeams = (state) => {
	let newTeams = [];
	for (let i = 0; i < state.numberOfTeams; i += 1) {
		let team = state.players.filter((player, index) => (index % state.numberOfTeams === i ));
		let teamObj = {
			teamName: `Team ${ i + 1 }`, 
			players: team,
			points: 0,
		}
		newTeams.push(teamObj);
	};
	return ({
		...state,
		teams: newTeams,
	})
};

let createOpponents = ({ teams }) => {
	let opponents = [];
	for (let i = 0; i < teams.length - 1; i += 1) {
		opponents.push(teams.filter((teamB, j) => j > i ));
	};

	return opponents;
};

let createFixtures = (state, opponents) => {

		console.log(opponents);
	let fixtures = [];
	for (let i = 0; i < state.teams.length - 1; i += 1){
		let games = (opponents[i].map((opponent, j) => `Team ${ i + 1 } vs ${ opponent.teamName }`));
		fixtures = [...fixtures, ...games];
	}
	console.log(fixtures);
	return {
		...state,
		fixtures,
	}
}

let createLeague = (state) => {
	createFixtures(state, createOpponents(state))
}


let changeSettings = (state, { numberOfTeams, teamSize, homeAway }) => {
	return {
		...state,
		numberOfTeams,
		teamSize,
		totalPlayers: numberOfTeams * teamSize,
		homeAway,
	}
}

let reset = (state) => {
	return {
		...state,
		...initial,
	}
}





const reducer = (state, action) => {
	switch (action.type) {
		case 'submitPlayers': return createTeams(playerShuffle(submitPlayers(state, action)));
		case 'reset': return reset(state);
		case 'settings': return changeSettings(state, action);
		case 'shuffle': return createTeams(playerShuffle(state));
		case 'createLeague': return createLeague(state, action);
		default: return state;
	}
};

export default reducer;








