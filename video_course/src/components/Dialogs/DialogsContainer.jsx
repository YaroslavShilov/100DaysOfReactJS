import React from 'react';
import Dialogs from "./Dialogs";
import {sendMessageCreator, uppDateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";


const DialogsContainer = (props) => {
	let state = props.store.getState();
	let dialogsPage = state.dialogsPage;
	let dispatch = props.store.dispatch;
	let dialogs = dialogsPage.dialogs;
	let newMessagesBody = dialogsPage.newMessagesBody;
	let messages = dialogsPage.messages;
	
	let onMessageChange = text => {
		dispatch(uppDateNewMessageBodyActionCreator(text));
	};
	let onSendMessageClick = () => {
		dispatch(sendMessageCreator());
	};
	
	
	return (
		<Dialogs 
			dialogs={dialogs}
			newMessagesBody={newMessagesBody}
		  messages={messages}
			uppDateNewMessageBodyActionCreator={onMessageChange}
			sendMessageCreator={onSendMessageClick}
		/>
	)
};

export default DialogsContainer;