import React from 'react';
import {Route, Switch} from "react-router-dom";
import Player from "./Player";
import FullRoster from "./FullRoster";


const Roster = () => (
	<>
		<h1>This is a roster page</h1>
		<Switch>
			<Route path={'/roster'} component={FullRoster} exact/>
			<Route path={'/roster/:number'} component={Player}/>
		</Switch>
	</>
);

export default Roster