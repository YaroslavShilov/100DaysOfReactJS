import React from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {
	return (

		<div className={s.appWrapper}>
			<Header />
			<Navbar />
			<div className={s.appWrapper_container}>
				<Route path="/dialogs" render={() =>
					<DialogsContainer/>
				}/>
				<Route path="/profile" render={() =>
					<Profile/>
				}/>
				<Route path="/users" render={() =>
					<UsersContainer/>
				}/>
			</div>
		</div>
	);
};

//TODO lesson 55 time: 0
//TODO progress: 23/52hrs


export default App;
