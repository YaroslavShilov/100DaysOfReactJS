import React from 'react';
import s from './App.module.scss';
import Header from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

//**TODO: lesson 90 time: 00:00**//

class App extends React.Component {

	componentDidMount() {
		this.props.initializeApp();
	}


	render() {

		if(!this.props.initialized) return <Preloader/>

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
	}
}

const mapStateToProps = (state) => {
	return {
		initialized: state.app.initialized
	}
}

const mapDispatchToProps = {
	initializeApp,
}
const AppContainer = compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps)
)(App);

const MainApp = () => (
	<BrowserRouter>
		<Provider store={store}>
			<AppContainer/>
		</Provider>
	</BrowserRouter>
)

export default MainApp;