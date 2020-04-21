const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 5,
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
				users: [...action.users],
			};
			
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			};
			
		case SET_TOTAL_USERS_COUNT: 
			let totalUsersCount = 0;
			action.totalUsersCount > 70 ? totalUsersCount = 70 : totalUsersCount = action.totalUsersCount;
			
			return {
				...state,
				totalUsersCount,
			};
			
		default:
			return state;

	}

};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
