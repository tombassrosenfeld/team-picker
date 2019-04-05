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
	
	for (let i = 0; i < state.numberOfTeams; i += 1) {
		let team = state.players.filter((player, index) => (index % state.numberOfTeams === i ));
		let teamObj = {
			teamName: `Team ${ i }`, 
			players: team,
			points: 0,
		}
		state.teams.push(teamObj);
	};
	console.log(state.teams);
	return state;
};

let changeSettings = (state, { numberOfTeams, teamSize }) => {
	return {
		...state,
		numberOfTeams,
		teamSize,
		totalPlayers: numberOfTeams * teamSize,
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

		default: return state;
	}
};

export default reducer;








