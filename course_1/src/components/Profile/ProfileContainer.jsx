import React, {Component} from 'react';
import Profile from "./Profile";
import {getUserProfile, getUserStatus, savePhoto, saveProfile, updateUserStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
//import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component {

	refreshProfile() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId;
			if(!userId) {
				this.props.history.push('/login')
			}
		}
		this.props.getUserProfile(userId)
		this.props.getUserStatus(userId)
	}

	componentDidMount() {
		this.refreshProfile()
	}

	componentDidUpdate(prevProps) {
		if(prevProps.match.params.userId !== this.props.match.params.userId) {
			this.refreshProfile()
		}
	}

	render() {

		return (
			<Profile
				isOwner={!this.props.match.params.userId}
				status={this.props.status}
				profile={this.props.profile}
				updateUserStatus={this.props.updateUserStatus}
				savePhoto={this.props.savePhoto}
				saveProfile={this.props.saveProfile}
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
	savePhoto,
	saveProfile,
}


export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
	//withAuthRedirect
)(ProfileContainer)