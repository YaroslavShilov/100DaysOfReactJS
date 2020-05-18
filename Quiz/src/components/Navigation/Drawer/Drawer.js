import React from "react";
import s from './Drawer.module.scss';
import {Backdrop} from "../../UI/Backdrop/Backdrop";

const links = [
	1,2,3,4
]

export class Drawer extends React.Component {

	renderLinks() {
		return links.map((i, inx) => {
			return (
				<li key={inx}>
					<a>Link {i}</a>
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