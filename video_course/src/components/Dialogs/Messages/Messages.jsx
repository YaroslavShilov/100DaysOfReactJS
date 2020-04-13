import React from 'react';
import s from './Messages.module.css';
import Message from "./Message/Message";
import {Route} from "react-router-dom";
import {uppDateNewMessageBodyActionCreator} from "../../../redux/state";

const Messages = (props) => {
	
	const newMessagesBody = props.dialogsPage.newMessagesBody;
	
	const messagesData = props.dialogsPage.messages
		.map(i=>{ return (
			<Route path={`/dialogs/${i.id}`} render={() =>
				<Message message={i.message} key={i.id}/>
			}/>
		)});
	
	let newMessageElement = React.createRef();
	
	let onMessageChange = () => {
		props.dispatch(uppDateNewMessageBodyActionCreator(newMessageElement.current.value))
	};
	
	let addMessage = ()=> {
		let text = newMessageElement.current.value;
		alert(text);
	};
	
	
	return (
		<div className={s.messages}>
			{messagesData}
			<div>
				<textarea ref={newMessageElement} onChange={onMessageChange} value={newMessagesBody}/>
				<div>
					<button onClick={addMessage}>Reply</button>
				</div>
			</div>
		</div>
	)
};

export default Messages;