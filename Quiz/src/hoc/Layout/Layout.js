import React from "react";
import s from './Layout.module.scss'
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import {Drawer} from "../../components/Navigation/Drawer/Drawer";

export class Layout extends React.Component {
	
	state = {
		menu: false,
	}
	
	toggleMenuHandler = () => {
		this.setState({
			menu: !this.state.menu,
		})
	}
	
	menuCloseHandler = () => {
		this.setState({
			menu: false,
		})
	}
	
	render() {
		return (
			<div className={s.Layout}>
				<Drawer
					isOpen={this.state.menu}
					onClose={this.menuCloseHandler}
				/>
				
				<MenuToggle
					onToggle={this.toggleMenuHandler}
					isOpen={this.state.menu}
				/>
				
				<main>
					{this.props.children}
				</main>
			</div>
		)
	}
}