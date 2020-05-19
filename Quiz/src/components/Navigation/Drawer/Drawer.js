import React from "react";
import s from './Drawer.module.scss';
import {Backdrop} from "../../UI/Backdrop/Backdrop";
import {NavLink} from "react-router-dom";

const links = [
	{label: 'List', to: '/', exact: true},
	{label: 'Auth', to: '/auth', exact: false},
	{label: 'Create test', to: '/quiz-creater', exact: false},
	
]

export class Drawer extends React.Component {
	
	renderLinks() {
		return links.map((i, inx) => {
			return (
				<li key={inx}>
					<NavLink 
						to={i.to}
						exact={i.exact}
						activeClassName={s.active}
						onClick={this.props.onClose}
					>
						{i.label}
					</NavLink>
				</li>
			)
		})
	}
	
	render() {
		const cls = [
			s.Drawer,
		]
		!this.props.isOpen && cls.push(s.close);
		
		return (<>
			<nav className={cls.join(' ')}>
				<ul>
					{this.renderLinks()}
				</ul>
			</nav>
			{
				this.props.isOpen
				? <Backdrop onClick={this.props.onClose}/>
				: null
			}
		</>)
	}
}