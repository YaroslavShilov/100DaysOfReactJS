const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
	users: [
		{
			id: 1, 
			avatarUrl: 'https://i04.fotocdn.net/s111/7342fc5d7c181512/public_pin_l/2494157237.jpg', 
			followed: true, 
			fullName: 'Dmitry', 
			status: 'I\'m a boss', 
			location: {city: 'Minsk', country: 'Belarus'} 
		},
		{
			id: 1, 
			avatarUrl: 'https://pixelbox.ru/wp-content/uploads/2018/02/spiderman_steam_avatar.jpg', 
			followed: false, 
			fullName: 'Alesha', 
			status: 'I\'m a boss too', 
			location: {city: 'Minsk', country: 'Belarus'} 
		},
		{
			id: 1, 
			avatarUrl: 'https://i05.fotocdn.net/s111/3aebb082a7882d95/public_pin_m/2494157242.jpg', 
			followed: true, 
			fullName: 'Petr', 
			status: 'Big man', 
			location: {city: 'Piter', country: 'Russia'} 
		},
		{
			id: 1, 
			avatarUrl: 'https://i04.fotocdn.net/s111/e2cc2797814f9d18/public_pin_l/2494157238.jpg', 
			followed: true, 
			fullName: 'Boris', 
			status: 'hren', 
			location: {city: 'Moscow', country: 'Russia'} 
		},
		{
			id: 1, 
			avatarUrl: 'https://i05.fotocdn.net/s111/54e931d082fa9d0f/public_pin_l/2494157248.jpg', 
			followed: false, 
			fullName: 'Britva', 
			status: 'popadesh', 
			location: {city: 'Moscow', country: 'Russia'} 
		},
	],
	newPostText: 'text',
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
				user: state.user.map(i => {
					if(i.id === action.userId) {
						return {...i, followed: true};
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
