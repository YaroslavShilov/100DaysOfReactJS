import React, {Suspense} from 'react';
import s from './App.module.scss';
import Header from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {

	componentDidMount() {
		this.props.initializeApp();
	}


	render() {

		if (!this.props.initialized) return <Preloader/>

		return (
			<div className={s.appWrapper}>
				<Header/>
				<Navbar/>

				<div className={s.appWrapper_container}>
					<Suspense fallback={<Preloader />}>
						<Route path="/dialogs" component={DialogsContainer}/>
						<Route path="/profile/:userId?" component={ProfileContainer}/>
						<Route path="/users" component={UsersContainer}/>
					</Suspense>

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