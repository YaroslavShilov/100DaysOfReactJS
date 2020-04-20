const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
	users: []
};

export const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state, 
				users: state.users.map(i => {
					if(i.id === action.userId) {
						return {...i, followed: true};
					}
					return i
				}),
			};
			
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(i => {
					if(i.id === action.userId) {
						return {...i, followed: false};
					}
					return i;
				})
			};
			
		case SET_USERS: 
			return {
				...state,
				users: [...state.users, ...action.users],
			};
			
		default:
			return state;

	}

};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
