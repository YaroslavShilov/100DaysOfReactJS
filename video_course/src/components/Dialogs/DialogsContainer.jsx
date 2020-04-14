import React from 'react';
import Dialogs from "./Dialogs";
import {sendMessageCreator, uppDateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {
	return (
		<StoreContext.Consumer>
			{
				store => {
					let state = store.getState();
					let dialogsPage = state.dialogsPage;
					let dispatch = store.dispatch;
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
					);
				}
			}
			
		</StoreContext.Consumer>
	)
};

export default DialogsContainer;