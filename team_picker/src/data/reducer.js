import initial from './initial';


let shuffle = (array) => {
  var i = 0, j = 0, temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  console.log(array);
  return array;
};

let submitPlayers = (state, { players }) => {
	return ({
			...state,
			players,
			teams: [],
			playersSubmitted: true,

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
		state.teams.push(team);
	};
	return state;
};

let changeSettings = (state, { numberOfTeams, teamSize }) => {
	console.log(numberOfTeams);
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








