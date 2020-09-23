import React, { Component } from "react";
import { connect } from "react-redux";
import { follow, requestUsers, unFollow } from "../../redux/users-reducer";
import Users from "./Users";
import { Preloader } from "../common/Preloader/Preloader";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/users-selectors";
import { Paginator } from "../common/Paginator/Paginator";
import { UserType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";

type MapStatePropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<number>;
};

type MapDispatchPropsType = {
  requestUsers: (currentPage: number, pageSize: number) => void;
  follow: (id: number) => void;
  unFollow: (id: number) => void;
};

type OwnPropsType = {
  pageTitle: string;
};

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class UsersContainer extends Component<PropsType> {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number): void => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
  };

  render() {
    const props = this.props;

    return (
      <>
        <h2>{props.pageTitle}</h2>
        <Paginator
          totalItemsCount={props.totalUsersCount}
          pageSize={props.pageSize}
          currentPage={props.currentPage}
          onPageChanged={this.onPageChanged}
        />

        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            follow={props.follow}
            unFollow={props.unFollow}
            users={props.users}
            followingInProgress={props.followingInProgress}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state),
});

let mapDispatchToProps: MapDispatchPropsType = {
  requestUsers,
  follow,
  unFollow,
};
//TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    mapDispatchToProps
  )
)(UsersContainer);
