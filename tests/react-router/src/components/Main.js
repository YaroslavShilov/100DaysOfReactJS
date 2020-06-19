import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import Schedule from "./Schedule";
import Roster from "./Roster";

const Main = () => (
	<main>
		<Switch>
			<Route path={'/'} component={Home} exact/>
			<Route path={'/roster'} component={Roster}/>
			<Route path={'/schedule'} component={Schedule}/>
		</Switch>
	</main>
);

export default Main