import React from 'react';
import {Route, Switch} from "react-router-dom";
import GlobalFeed from "./GlobalFeed/GlobalFeed";
import Article from "./Article/Article";
import Authentication from "./Authentication/Authentication";


const Routes = () => {
	console.log('routes')
	return (
		<Switch>
			<Route path={'/article/:slug'} component={Article}/>
			<Route path={'/login'} component={Authentication}/>
			<Route path={'/register'} component={Authentication}/>
			<Route path={'/'} component={GlobalFeed} exact/>
		</Switch>
	);
}

export default Routes