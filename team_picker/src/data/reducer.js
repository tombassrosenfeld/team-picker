import initial from './initial.js';

const reducer = (state, action) => {
	switch (action.type) {
		case 'submitPlayers': return ({ ...state, players: action.players });

		default: return state;
		
	}
};

export default reducer;