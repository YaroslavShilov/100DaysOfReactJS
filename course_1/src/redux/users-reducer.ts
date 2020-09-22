import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";
import { UserType } from "../types/types";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, //array of users id
};

type InitialStateType = typeof initialState;

export const usersReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

type followSuccessType = {
  type: typeof FOLLOW;
  userId: number;
};
export const followSuccess = (userId: number): followSuccessType => ({
  type: FOLLOW,
  userId,
});

type unFollowSuccessType = {
  type: typeof UNFOLLOW;
  userId: number;
};
export const unFollowSuccess = (userId: number): unFollowSuccessType => ({
  type: UNFOLLOW,
  userId,
});

type setUsersType = {
  type: typeof SET_USERS;
  users: Array<UserType>;
};
export const setUsers = (users: Array<UserType>): setUsersType => ({
  type: SET_USERS,
  users,
});

type setCurrentPageType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};
export const setCurrentPage = (currentPage: number): setCurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

type setTotalUsersCountType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  totalUsersCount: number;
};
export const setTotalUsersCount = (
  totalUsersCount: number
): setTotalUsersCountType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});

type toggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};
export const toggleIsFetching = (
  isFetching: boolean
): toggleIsFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

type toggleFollowingInProgressType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS;
  isFetching: boolean;
  userId: number;
};
export const toggleFollowingInProgress = (
  isFetching: boolean,
  userId: number
): toggleFollowingInProgressType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const requestUsers = (page: number, pageSize: number) => async (
  dispatch: any
) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));

  const data = await usersAPI.getUsers(page, pageSize);

  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

const followUnFollowFlow = async (
  dispatch: any,
  userId: number,
  apiMethod: any,
  actionCreator: any
) => {
  dispatch(toggleFollowingInProgress(true, userId));

  const response = await apiMethod(userId);

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingInProgress(false, userId));
};

export const follow = (userId: number) => (dispatch: any) => {
  followUnFollowFlow(dispatch, userId, usersAPI.follow, followSuccess);
};

export const unFollow = (userId: number) => (dispatch: any) => {
  followUnFollowFlow(dispatch, userId, usersAPI.unFollow, unFollowSuccess);
};
