import React from 'react';
import Routes from "./pages/Routes";
import {BrowserRouter as Router} from "react-router-dom";
import TopBar from "./components/TopBar";
import {CurrentUserProvider} from "./context/currentUser";

function App() {
	console.log('app')
  return (
    <CurrentUserProvider>
	    <Router>
		    <TopBar/>
		    <Routes/>
	    </Router>
    </CurrentUserProvider>
  );
}

export default App;
