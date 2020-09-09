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
	]
};

export const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {

		case SEND_MESSAGE:
			let body = action.newMessageBody;
			return {
				...state,
				messages: [...state.messages, {id: (+new Date()).toString(), message: body}],
			};

		default:
			return state;
	}
};


export const sendMessageCreator = (newMessageBody) => ({type: 'SEND_MESSAGE', newMessageBody});