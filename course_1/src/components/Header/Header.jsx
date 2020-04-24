import React from 'react';
import s from './Header.module.scss';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' alt="logo"/>
	      <div className={s.loginBlock}>
		      {props.isAuth ? props.login : <NavLink to={'/login'}> Login </NavLink> }
		      
	      </div>
    </header>
};

export default Header;