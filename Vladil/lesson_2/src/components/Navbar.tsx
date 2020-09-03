import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => (
	<nav>
		<div className="nav-wrapper purple darken-2 px1">
			<a href="/" className="brand-logo">React + Typescript</a>
			<ul className="right hide-on-med-and-down">
				<li><Link to="/">Tasks</Link></li>
				<li><Link to="/about">Information</Link></li>
			</ul>
		</div>
	</nav>
);
