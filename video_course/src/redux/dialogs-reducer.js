const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
	dialogs: [
		{id: 1, name: 'Dimych'},
		{id: 2, name: 'Sasha'},
		{id: 3, name: 'Alesha'},
		{id: 4, name: 'Gena'},
	],
		messages: [
	{id: 1, message: 'Hi'},
	{id: 2, message: 'how'},
	{id: 3, message: 'are'},
	{id: 4, message: 'you'},
	{id: 5, message: '?'},
],
	newMessagesBody: ''
};

export const dialogsReducer = (state = initialState, action) => {
	
	switch(action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessagesBody = action.body;
			return state;
			
		case SEND_MESSAGE:
			let body = state.newMessagesBody;
			state.newMessagesBody = '';
			let newMessage = {
				id: 1,
				message: body,
			};
			state.messages.push(newMessage);
			return state;
			
		default:
			return state;
	}
	
};

export const uppDateNewMessageBodyActionCreator = text => ({
	type: 'UPDATE_NEW_MESSAGE_BODY',
	body: text,
});

export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'});