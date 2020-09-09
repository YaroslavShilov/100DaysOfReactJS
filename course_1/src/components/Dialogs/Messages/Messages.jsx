import React from 'react';
import s from './Messages.module.css';
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

const AddMessageForm = (props) => (
	<form onSubmit={props.handleSubmit}>
		<div>
			<Field
				component={'textarea'}
				name={'newMessageBody'}
				placeholder="Enter your message"
			/>
		</div>
		<button>Reply</button>
	</form>
)

const AddMessageReduxForm = reduxForm({
	form: 'dialogAddMessageForm'
})(AddMessageForm)

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
			<AddMessageReduxForm onSubmit={addNewMessage}/>
		</div>
	)
};


export default Messages;