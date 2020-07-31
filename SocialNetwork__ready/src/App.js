import React from 'react';
import Routes from "./pages/Routes";
import {BrowserRouter as Router} from "react-router-dom";
import TopBar from "./components/TopBar";
import {CurrentUserProvider} from "./context/currentUser";
import CurrentUserChecker from "./components/currentUserChecker";

function App() {
	return (
		<CurrentUserProvider>
			<CurrentUserChecker>
				<Router>
					<TopBar/>
					<Routes/>
				</Router>
			</CurrentUserChecker>
		</CurrentUserProvider>
	);
}

export default App;
