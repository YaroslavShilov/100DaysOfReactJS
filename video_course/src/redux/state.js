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
	/**
	 * Выполняет различные действия в зависимости от переданного типа
	 * @param {object} action - передаваеммые объект
	 * @example
	 * store.dispatch({
	 *  type: 'UPDATE-NEW_POST_TEXT',
	 *  newText: 'hello world',
	 * })
	 * 
	 * 
	 */
	dispatch(action) {
		if(action.type === 'ADD-POST') {
			let newPost = {
				id: 6,
				message: this._state.profilePage.newPostText,
				likesCount: 0,
			};

			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
			
		} 
		else if (action.type === 'UPDATE-NEW_POST_TEXT') {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}
	}
	
};



export default store;