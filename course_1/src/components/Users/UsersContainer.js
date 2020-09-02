import React, {Component} from 'react';
import {connect} from "react-redux";
import {
	follow,
	followSuccess, getUsers, setCurrentPage, toggleFollowingInProgress, unFollow, unFollowSuccess
}
	from "../../redux/users-reducer";
import Users from "./User/Users";
import {Preloader} from "../common/Preloader/Preloader";

class UsersContainer extends Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize)
	};


	render() {

		const props = this.props;

		return <>
			{this.props.isFetching ? <Preloader /> : null}
		
			<Users
				currentPage = {props.currentPage}
				follow = {props.follow}
				unFollow = {props.unFollow}
				totalUsersCount = {props.totalUsersCount}
				pageSize = {props.pageSize}
				users = {props.users}
				onPageChanged={this.onPageChanged}
				toggleFollowingInProgress={props.toggleFollowingInProgress}
				followingInProgress={props.followingInProgress}
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
		followingInProgress: state.usersPage.followingInProgress
	}
);

let mapDispatchToProps = {
	followSuccess,
	unFollowSuccess,
	setCurrentPage,
	toggleFollowingInProgress,
	getUsers,
	follow,
	unFollow,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);