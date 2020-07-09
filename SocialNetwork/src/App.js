import React from 'react';
import Routes from "./pages/Routes";
import {BrowserRouter as Router} from "react-router-dom";
import TopBar from "./components/TopBar";

function App() {
	console.log('app')
  return (
    <div>
	    <Router>
		    <TopBar/>
		    <Routes/>
	    </Router>
    </div>
  );
}

export default App;
