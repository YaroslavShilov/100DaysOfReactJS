import React from 'react';
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = ({login, isAuth, }) => {
	const onSubmit = ({email, password, rememberMe}) => {
		login(email, password, rememberMe)
	}

	if(isAuth)  return <Redirect to={'/profile'} />

	return (
		<div>
			<h1>Login</h1>
			<LoginForm onSubmit={onSubmit}/>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		isAuth: state.auth.isAuth,
	};
}

const mapDispatchToProps = {
	login,
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
