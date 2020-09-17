import React, {Component} from 'react';
import {connect} from "react-redux";
import {
	follow,
	followSuccess, requestUsers, setCurrentPage, toggleFollowingInProgress, unFollow, unFollowSuccess
}
	from "../../redux/users-reducer";
import Users from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers} from "../../redux/users-selectors";
import {Paginator} from "../common/Paginator/Paginator";

class UsersContainer extends Component {

	componentDidMount() {
		this.props.requestUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = (pageNumber) => {
		this.props.requestUsers(pageNumber, this.props.pageSize)
	};


	render() {

		const props = this.props;

		return <>
			<Paginator
				totalItemsCount={props.totalUsersCount}
				pageSize={props.pageSize}
				currentPage={props.currentPage}
				onPageChanged={this.onPageChanged}
			/>

			{this.props.isFetching
				? <Preloader />
				: <Users
					currentPage = {props.currentPage}
					follow = {props.follow}
					unFollow = {props.unFollow}
					totalUsersCount = {props.totalUsersCount}
					pageSize = {props.pageSize}
					users = {props.users}
					onPageChanged={this.onPageChanged}
					followingInProgress={props.followingInProgress}
				/>
			}
		</>
	}
}

let mapStateToProps = state => (
	{
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
	}
);

let mapDispatchToProps = {
	followSuccess,
	unFollowSuccess,
	setCurrentPage,
	toggleFollowingInProgress,
	requestUsers,
	follow,
	unFollow,
};



export default compose(
	connect(mapStateToProps, mapDispatchToProps),
)(UsersContainer);