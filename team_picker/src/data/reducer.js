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
	let fixtures = [];
	for (let i = 0; i < state.teams.length - 1; i += 1){
		let games = (opponents[i].map((opponent, j) => `${ state.teams[i].teamName } vs ${ opponent.teamName }`));
		fixtures = [...fixtures, ...games];
	}
	return {
		...state,
		fixtures,
	}
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

let win = (state, { id }) => {
	let teams = state.teams; 
	state.teams[id].points = state.teams[id].points += 2;
	return{
		...state,
		teams,
	}
}

let draw = (state, { id }) => {
	let teams = state.teams; 

	state.teams[id].points = state.teams[id].points += 1;

	return{
		...state,
		teams,
	}
}

let sortLeaguetable = (state) => {
	let teams = state.teams;
	let leaguetable = teams.sort(compare('points', 'desc'));
	console.log(leaguetable);
	return{
		...state,
		leaguetable,
	}

}

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

const reducer = (state, action) => {
	switch (action.type) {
		case 'submitPlayers': return createTeams(playerShuffle(submitPlayers(state, action)));
		case 'reset': return reset(state);
		case 'settings': return changeSettings(state, action);
		case 'shuffle': return createTeams(playerShuffle(state));
		case 'createLeague': return createFixtures(state, createOpponents(state));
		case 'teamWin': return sortLeaguetable(win(state, action));
		case 'teamDraw': return sortLeaguetable(draw(state, action));
		default: return state;
	}
};

export default reducer;








