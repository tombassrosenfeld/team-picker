
export const submitPlayers = (data) => {
	console.log(data);
	return {
		type: 'submitPlayers',
		players: data,
	}
}