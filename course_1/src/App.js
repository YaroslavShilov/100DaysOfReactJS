import React from 'react';
import s from './App.module.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


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
					<ProfileContainer/>
				}/>
				<Route path="/users" render={() =>
					<UsersContainer/>
				}/>
			</div>
		</div>
	);
};

//TODO lesson 60 time: 18:00
//TODO progress: 26/52hrs


export default App;
