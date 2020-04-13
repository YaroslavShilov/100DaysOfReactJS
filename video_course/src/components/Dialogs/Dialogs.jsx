import React from 'react';
import s from './Dialogs.module.css';
import Messages from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
	const dialogsData = props.dialogsPage.dialogs
		.map(i =><DialogItem name={i.name} id={i.id} key={i.id}/>);
	
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				
				{dialogsData}
				
			</div>
			
			<Messages dialogsPage={props.dialogsPage} dispatch={props.dispatch}/>
		</div>
	)
};

export default Dialogs;