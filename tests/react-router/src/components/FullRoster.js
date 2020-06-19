import React from 'react';
import {PlayerAPI} from "../API/PlayerAPI";
import {Link} from "react-router-dom";

const FullRoster = () => (
	<ul>
		{
			PlayerAPI.all().map(player => (
				<li key={player.number}>
					<Link to={`/roster/${player.number}`}>{player.name}</Link>
				</li>
			))
		}
	</ul>
);

export default FullRoster