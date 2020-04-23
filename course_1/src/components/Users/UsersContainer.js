import React, {Component} from 'react';
import {connect} from "react-redux";
import {
	follow, setCurrentPage, setTotalUsersCount, 
	setUsers, toggleIsFetching, unfollow
}
	from "../../redux/users-reducer";
import * as axios from 'axios';
import Users from "./User/Users";
import {Preloader} from "../common/Preloader/Preloader";


class UsersContainer extends Component {

	componentDidMount() {
		this.props.toggleIsFetching(true);
		
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount);
		});
	}

	onPageChanged = (pageNumber) => {
		this.props.toggleIsFetching(true);
		
		this.props.setCurrentPage(pageNumber);

		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(response.data.items);
		});
	};


	render() {

		let props = this.props;
		return <>
			{this.props.isFetching ? <Preloader /> : null}
		
			<Users
				currentPage = {props.currentPage}
				follow = {props.follow}
				unfollow = {props.unfollow}
				totalUsersCount = {props.totalUsersCount}
				pageSize = {props.pageSize}
				users = {props.users}
				onPageChanged={this.onPageChanged}
			/>
		</>
	}
}

let mapStateToProps = state => (
	{
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
	}
);

let mapDispatchToProps = {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);