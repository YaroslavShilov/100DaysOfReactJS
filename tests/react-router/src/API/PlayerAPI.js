export const PlayerAPI = {
	_players: [
		{ number: 1, name: "Ben Blocker", position: "G" },
		{ number: 2, name: "Dave Defender", position: "D" },
		{ number: 3, name: "Sam Sweeper", position: "D" },
		{ number: 4, name: "Matt Midfielder", position: "M" },
		{ number: 5, name: "William Winger", position: "M" },
		{ number: 6, name: "Fillipe Forward", position: "F" }
	],
	all: function() { return this._players},
	get: function(id) {
		return this._players.find(player => player.number === id)
	}
}