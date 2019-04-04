
export const submitPlayers = ({ players }) => {
	
	return {
		type: 'submitPlayers',
		players,
	}
}

export const reset = () => {
	return { type: 'reset', }
}