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
					  store={props.store}
					/>
				}/>
				<Route path="/profile" render={() =>
					<Profile
						profilePage={props.state.profilePage}
						dispatch={props.store.dispatch.bind(props.store)}
					/>
				}/>
			</div>
		</div>
	);
};

//TODO lesson 43 time: 13:00
//TODO progress: 15/52hrs


export default App;
