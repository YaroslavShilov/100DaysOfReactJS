import React from 'react';
import {Route, Switch} from "react-router-dom";
import GlobalFeed from "./GlobalFeed/GlobalFeed";
import Article from "./Article/Article";
import Authentication from "./Authentication/Authentication";
import TagFeed from "./TagFeed.js/TagFeed";
import YourFeed from "./YourFeed/YourFeed";
import CreateArticle from "./CreateArticle/CreateArticle";


const Routes = () => {
	return (
		<Switch>
			<Route path={'/article/:slug'} component={Article}/>
			<Route path={'/articles/new'} component={CreateArticle}/>
			<Route path={'/login'} component={Authentication}/>
			<Route path={'/register'} component={Authentication}/>
			<Route path={'/tags/:slug'} component={TagFeed}/>
			<Route path={'/feed'} component={YourFeed} exact/>
			<Route path={'/'} component={GlobalFeed} exact/>
		</Switch>
	);
}

export default Routes