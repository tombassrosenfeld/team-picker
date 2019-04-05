
export const submitPlayers = ({ players }) => {
	
	return {
		type: 'submitPlayers',
		players,
	}
}

export const submitSettings = ({ numberOfTeams, teamSize }) => {
	
	return {
		type: 'settings',
		numberOfTeams: +numberOfTeams,
		teamSize: +teamSize,
	}
}

export const reset = () => {
	return { type: 'reset', }
}