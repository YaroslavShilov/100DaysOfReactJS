const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 5,
	isFetching: false,
	followingInProgress: false,
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
		case TOGGLE_IS_FETCHING: 
			return {
				...state,
				isFetching: action.isFetching,
			};
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.followingInProgress,
			};
			
		default:
			return state;

	}

};

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (followingInProgress) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress});
