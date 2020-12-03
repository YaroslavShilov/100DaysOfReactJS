import { createSelector } from "reselect";
import { AppStateType } from "./redux-store";
import { UserType } from "../types/types";

export const getUsersSelector = (state: AppStateType) => {
  return state.usersPage.users;
};

export const getUsers = createSelector(getUsersSelector, (users) => {
  return users.filter((user: UserType) => true); //this code for example
});

export const getPageSize = (state: AppStateType) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state: AppStateType) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state: AppStateType) => {
  return state.usersPage.followingInProgress;
};
