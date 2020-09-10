import React, {Component} from 'react';
import Profile from "./Profile";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
//import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId;
		}
		this.props.getUserProfile(userId)
		this.props.getUserStatus(userId)
	}

	render() {



		return (
			<Profile
				status={this.props.status}
				profile={this.props.profile}
				updateUserStatus={this.props.updateUserStatus}
			/>
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth
});

let mapDispatchToProps = {
	getUserStatus,
	getUserProfile,
	updateUserStatus,
}


export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
	//withAuthRedirect
)(ProfileContainer)