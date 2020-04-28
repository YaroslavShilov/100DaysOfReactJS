import React, {Component} from 'react';
import {connect} from "react-redux";
import {
	follow, setCurrentPage, setTotalUsersCount,
	setUsers, toggleFollowingInProgress, toggleIsFetching, unfollow
}
	from "../../redux/users-reducer";
import Users from "./User/Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersContainer extends Component {

	componentDidMount() {
		this.props.toggleIsFetching(true);
		
		usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
			this.props.setTotalUsersCount(data.totalCount);
		});
	}

	onPageChanged = (pageNumber) => {
		this.props.toggleIsFetching(true);
		
		this.props.setCurrentPage(pageNumber);

		usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
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