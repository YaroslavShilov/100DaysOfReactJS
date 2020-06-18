import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = (props) => (
	<nav className={'navbar navbar-dark navbar-expand-lg bg-primary'}>
		<div className="navbar-brand">
			Note App
		</div>
		<ul className="navbar-nav">
			<li className={'nav-item'}>
				<NavLink to="/" className={"nav-link"} exact>
					Home
				</NavLink>
			</li>
			<li className={'nav-item'}>
				<NavLink to="/about" className={"nav-link"}>About</NavLink>
			</li>
		</ul>
	</nav>
);

export default Navbar