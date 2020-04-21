import React, {Component} from 'react';
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} 
				from "../../redux/users-reducer";
import * as axios from 'axios';
import Users from "./User/Users";


class UsersContainer extends Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount);
		});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);

		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items);
		});
	};


	render() {
		const {currentPage, follow, unfollow, totalUsersCount, pageSize, users} = this.props;


		return <Users {...{
			currentPage,
			follow,
			unfollow,
			totalUsersCount,
			pageSize,
			users,
			onPageChanged: this.onPageChanged
		}} />;
	}
}

let mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
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
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber));
		},
		setTotalUsersCount: (totalUsersCount) => {
			dispatch(setTotalUsersCountAC(totalUsersCount));
		},
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);