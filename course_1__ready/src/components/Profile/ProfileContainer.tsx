import React, { Component } from "react";
import Profile from "./Profile";
import {
  getUserProfile,
  getUserStatus,
  savePhoto,
  saveProfile,
  updateUserStatus,
} from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { ProfileType } from "../../types/types";
import * as H from "history";
import { AppStateType } from "../../redux/redux-store";

type OwnPropsType = {
  match: any;
  authorizedUserId: number;
  history: H.History;
};

type MapStateToPropsType = {
  profile: ProfileType | null;
  status: string;
  authorizedUserId: number | null;
  isAuth: boolean;
};

type MapDispatchToPropsType = {
  getUserStatus: (id: number) => void;
  getUserProfile: (id: number) => void;
  updateUserStatus: (text: string) => void;
  savePhoto: any;
  saveProfile: (profile: ProfileType) => void;
};

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

class ProfileContainer extends Component<PropsType> {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: PropsType) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.refreshProfile();
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
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

let mapDispatchToProps: MapDispatchToPropsType = {
  getUserStatus,
  getUserProfile,
  updateUserStatus,
  savePhoto,
  saveProfile,
};

export default compose(
  connect<
    MapStateToPropsType,
    MapDispatchToPropsType,
    OwnPropsType,
    AppStateType
  >(mapStateToProps, mapDispatchToProps),
  withRouter
)(ProfileContainer);
