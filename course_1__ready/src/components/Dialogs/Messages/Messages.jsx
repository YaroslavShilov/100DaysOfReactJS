import React from 'react';
import s from './Messages.module.css';
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Messages = (props) => {

	const messagesData = props.messages.map(i=>{ return (
		<Message message={i.message} key={i.id}/>
	)});

	const addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody)
	}
	
	return (
		<div className={s.messages}>
			{messagesData}
			<AddMessageForm onSubmit={addNewMessage}/>
		</div>
	)
};


export default Messages;