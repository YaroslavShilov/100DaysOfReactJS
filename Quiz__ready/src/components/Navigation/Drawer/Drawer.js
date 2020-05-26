import React from "react";
import s from './Drawer.module.scss';
import {Backdrop} from "../../UI/Backdrop/Backdrop";
import {NavLink} from "react-router-dom";

export class Drawer extends React.Component {
	
	renderLinks(links) {
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
		
		const links = [
			{label: 'List', to: '/', exact: true},
		]
		
		console.log(this.props.isAuthenticated)
		
		if(this.props.isAuthenticated) {
			links.push({label: 'Create test', to: '/quiz-creater', exact: false})
			links.push({label: 'Logout', to: '/logout', exact: false})
		} else {
			links.push({label: 'Auth', to: '/auth', exact: false},)
		}
		
		return (<>
			<nav className={cls.join(' ')}>
				<ul>
					{this.renderLinks(links)}
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