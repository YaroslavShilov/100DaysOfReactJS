import React from 'react';
import s from './Messages.module.css';
import Message from "./Message/Message";
import {Route} from "react-router-dom";

const Messages = (props) => {
	
	const newMessagesBody = props.newMessagesBody;
	
	const messagesData = props.messages
		.map(i=>{ return (
			<Route path={`/dialogs/${i.id}`} render={() =>
				<Message message={i.message} key={i.id}/>
			}/>
		)});
	
	
	let onMessageChange = (e) => {
		let body = e.target.value;
		props.uppDateNewMessageBody(body);
	};
	
	let onSendMessageClick = ()=> {
		props.sendMessageCreator()
	};
	
	
	return (
		<div className={s.messages}>
			{messagesData}
			<div>
				<textarea onChange={onMessageChange} value={newMessagesBody} placeholder="Enter your message"/>
				<div>
					<button onClick={onSendMessageClick}>Reply</button>
				</div>
			</div>
		</div>
	)
};

export default Messages;