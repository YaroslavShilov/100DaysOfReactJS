import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import * as axios from 'axios';
import {setAuthUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
	componentDidMount() {
		//this.props.toggleIsFetching(true);

		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true,
			/*
			 withCredentials - определяет, должны ли создаваться кросс-доменные Access-Control запросы с использованием таких идентификационных данных как cookie, авторизационные заголовки или TLS сертификаты. Настройка withCredentials бесполезна при запросах на тот же домен.
			* */
		}).then(response => {
			if(response.data.resultCode === 0) {
				let {login, id: userId, email} = response.data.data;
				this.props.setAuthUserData(userId, email, login);
			}
			
		});
	}
	
	render() {
		return <Header {...this.props}/>
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
});


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);