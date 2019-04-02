

const reducer = (state, action) => {
	switch (action.type) {
		case 'submitPlayers': {
			// console.log(action.players);
			return ({ ...state, players: action.players, });
		}
		default: return state;
		
	}
};

export default reducer;