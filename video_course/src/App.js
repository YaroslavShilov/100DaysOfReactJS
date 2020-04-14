import React from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from 'react-router-dom';


const App = (props) => {
	return (

		<div className={s.appWrapper}>
			<Header />
			<Navbar />
			<div className={s.appWrapper_container}>
				<Route path="/dialogs" render={() =>
					<DialogsContainer store={props.store}/>
				}/>
				<Route path="/profile" render={() =>
					<Profile store={props.store}/>
				}/>
			</div>
		</div>
	);
};

//TODO lesson 43 time: 13:00
//TODO progress: 17/52hrs


export default App;
