import React, {Component} from 'react';
import {connect} from "react-redux";
import {
	follow,
	followSuccess, requestUsers, setCurrentPage, toggleFollowingInProgress, unFollow, unFollowSuccess
}
	from "../../redux/users-reducer";
import Users from "./User/Users";
import {Preloader} from "../common/Preloader/Preloader";
//import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers} from "../../redux/users-selectors";

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
			{this.props.isFetching ? <Preloader /> : null}
		
			<Users
				currentPage = {props.currentPage}
				follow = {props.follow}
				unFollow = {props.unFollow}
				totalUsersCount = {props.totalUsersCount}
				pageSize = {props.pageSize}
				users = {props.users}
				onPageChanged={this.onPageChanged}
				followingInProgress={props.followingInProgress}
			/>
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
	//withAuthRedirect
)(UsersContainer);