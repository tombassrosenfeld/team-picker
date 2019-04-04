import initial from './initial';


let shuffle = (array) => {
  var i = 0
    , j = 0
    , temp = null;

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




const reducer = (state, action) => {
	switch (action.type) {
		case 'submitPlayers': return createTeams(playerShuffle(submitPlayers(state, action)));
		case 'reset': return ({ 
			...state, 
			...initial,
		});

		default: return state;
	}
};

export default reducer;








