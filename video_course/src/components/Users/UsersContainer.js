import Users from "./User/Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

let mapStateToProps = state => {
	return {
		users: state.usersPage.users
	}
};

let mapDispatchToProps = dispatch => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId));
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users));		
		},
	}
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);//state приходит из redux-store, из combineReducers

export default UsersContainer;