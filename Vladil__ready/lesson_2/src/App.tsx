import React from 'react';
import {Navbar} from "./components/Navbar";
import {TodosPages} from "./pages/TodosPages";
import {AboutPage} from "./pages/AboutPage";
import {Route} from 'react-router-dom'



const App: React.FC = () => {


  return (
  	<>
  	  <Navbar/>
  	  <div className="container">
		    <Route path={'/'} component={TodosPages} exact/>
		    <Route path={'/about'} component={AboutPage} />
	    </div>
  	</>
  );
}

export default App;
