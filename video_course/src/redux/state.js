const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

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
			newMessagesBody: 'textMessageBody'
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
		sidebar: {

		}
	},
	_callSubscriber(){},
	
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	_addPost() {
		let newPost = {
			id: 6,
			message: this._state.profilePage.newPostText,
			likesCount: 0,
		};

		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},
	_updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	_updateNewMessageBody(newBody) {
		this._state.dialogsPage.newMessagesBody = newBody;
		this._callSubscriber(this._state);
	},
	
	/**
	 * Выполняет различные действия в зависимости от переданного типа
	 * @param {object} action - передаваеммый объект
	 * @example
	 * store.dispatch({
	 *  type: 'UPDATE-NEW_POST_TEXT',
	 *  newText: 'hello world',
	 * })
	 * 
	 * 
	 */
	dispatch(action) {
		if(action.type === ADD_POST) {
			this._addPost();
			
		}
		
		else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._updateNewPostText(action.newText);
		}
		
		else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._updateNewMessageBody(action.newBody);
		}
	}
	
};


export const addPostActionCreator = () => ({type: ADD_POST});

export const uppDateNewPostTextActionCreator = text => ({
	type: UPDATE_NEW_POST_TEXT, 
	newText: text
});

export const uppDateNewMessageBodyActionCreator = text => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	newBody: text,
});

export default store;