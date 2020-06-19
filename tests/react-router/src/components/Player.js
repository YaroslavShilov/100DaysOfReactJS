import React from 'react';
import {PlayerAPI} from '../API/PlayerAPI';

const Player = (props) => {

	//const number = parseInt(props.match.params.number, 10);
	//перевели в число, в десятич. систему счисления т.к. приходит строкой

	const number = +props.match.params.number;
	//другой способ перевода в число
	console.log('number: ', typeof (number));//number, а до перевода в число было string

	const player = PlayerAPI.get(number);

	if (!player) return <h2>Sorry, but the player was not found</h2>

	return (
		<div>
			<h2>{player.name} (#{player.number})</h2>
			<h3>{player.position}</h3>
		</div>
	);
}

export default Player