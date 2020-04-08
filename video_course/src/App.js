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
						state={props.state.dialogsPage}
					/>
				}/>
				<Route path="/profile" render={() =>
					<Profile
						profilePage={props.state.profilePage}
					  store={props.store}
					/>
				}/>
			</div>
		</div>
	);
};

//TODO lesson 37 time: 0
//TODO progress: 13/52hrs


export default App;
