import React from 'react';
import {Route, Switch} from "react-router-dom";
import GlobalFeed from "./GlobalFeed";
import Article from "./Article";
import Authentication from "./Authentication";
import TagFeed from "./TagFeed";
import YourFeed from "./YourFeed";
import CreateArticle from "./CreateArticle";
import EditArticle from "./EditArticle";
import Settings from "./Settings";


const Routes = () => {
	return (
		<Switch>
			<Route path={'/settings'} component={Settings}/>
			<Route path={'/articles/:slug/edit'} component={EditArticle}/>
			<Route path={'/articles/new'} component={CreateArticle}/>
			<Route path={'/articles/:slug'} component={Article}/>
			<Route path={'/login'} component={Authentication}/>
			<Route path={'/register'} component={Authentication}/>
			<Route path={'/tags/:slug'} component={TagFeed}/>
			<Route path={'/feed'} component={YourFeed} exact/>
			<Route path={'/'} component={GlobalFeed} exact/>
		</Switch>
	);
}

export default Routes