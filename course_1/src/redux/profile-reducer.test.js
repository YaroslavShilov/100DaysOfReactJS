import {addPost, deletePost, profileReducer} from "./profile-reducer";
// 1. test data
let initialState = {
	posts: [
		{id: 1, likesCount:1, message: 'Hello'},
		{id: 2, likesCount:2, message: 'My'},
		{id: 3, likesCount:3, message: 'Friend'},
		{id: 4, likesCount:4, message: 'How'},
		{id: 5, likesCount:5, message: 'Are you?'},
	]
};


it('length of posts should be incremented', () => {

	let action = addPost("text")

	// 2. action
	let newState = profileReducer(initialState, action);

	// 3. expectation
	expect(newState.posts.length).toBe(6);
})

it('message of new post should be correct', () => {
	let action = addPost("text")

	// 2. action
	let newState = profileReducer(initialState, action);

	// 3. expectation
	expect(newState.posts[5].message).toBe("text");
})

it('after deleting length of messages should be decrement', () => {
	let action = deletePost(1);

	let newState = profileReducer(initialState, action);

	expect(newState.posts.length).toBe(4)
})

it("after deleting length shouldn't be decrement if id is incorrect", () => {
	let action = deletePost(1000); // this id isn't real
	let newState = profileReducer(initialState, action);

	expect(newState.posts.length).toBe(5)
})