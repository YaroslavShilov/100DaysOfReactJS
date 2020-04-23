import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	const path = `/dialogs/${props.id}`;
	return (
				<div className={`${s.dialog}`}>
					<NavLink 
						to={path} 
						activeClassName={s.active}
					>
						{props.name}
					</NavLink>
				</div>
	)
};

export default DialogItem;