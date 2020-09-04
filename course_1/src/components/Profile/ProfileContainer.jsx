import React, {Component} from 'react';
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class ProfileContainer extends Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}
		this.props.getUserProfile(userId)
	}

	render() {
		return (
			<Profile
				{...this.props}
				profile={this.props.profile}
			/>
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);