import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';


const App = (props) => {
	return (

		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<div className='app-wrapper_content'>
				<Route path="/dialogs" render={() =>
					<Dialogs
						dialogsPage={props.state.dialogsPage}
					  dispatch={props.dispatch}
					/>
				}/>
				<Route path="/profile" render={() =>
					<Profile
						profilePage={props.state.profilePage}
						dispatch={props.dispatch}
					/>
				}/>
			</div>
		</div>
	);
};

//TODO lesson 40 time: 19:40
//TODO progress: 15/52hrs


export default App;
