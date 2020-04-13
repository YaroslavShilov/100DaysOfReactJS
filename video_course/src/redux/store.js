import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let store = {
	_state: {
		dialogsPage: {
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
		},
		profilePage: {
			posts: [
				{id: 1, likesCount:1, message: 'Hello'},
				{id: 2, likesCount:2, message: 'My'},
				{id: 3, likesCount:3, message: 'Friend'},
				{id: 4, likesCount:4, message: 'How'},
				{id: 5, likesCount:5, message: 'Are you?'},
			],
			newPostText: 'text',
		},
		sidebar: {}
	},
	_callSubscriber(){},
	
	getState() {
		return this._state;
	},
	
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.dialogsPage, action);
		
		this._callSubscriber(this._state);
	}
	
};






export default store;