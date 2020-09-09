import React from 'react';
import s from './App.module.scss';
import Header from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Login} from "./components/Login/Login";

//**TODO: lesson 75 time: 14:00**//

const App = () => {
	return (

		<div className={s.appWrapper}>
			<Header/>
			<Navbar/>
			<div className={s.appWrapper_container}>
				<Route path="/dialogs" component={DialogsContainer}/>
				<Route path="/profile/:userId?" component={ProfileContainer}/>
				<Route path="/users" component={UsersContainer}/>
				<Route path={'/login'} component={Login}/>
			</div>
		</div>
	);
};


export default App;
