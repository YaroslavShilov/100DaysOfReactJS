import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { PhotosType, PostType, ProfileType } from "../types/types";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
  posts: [
    { id: 1, likesCount: 1, message: "Hello" },
    { id: 2, likesCount: 2, message: "My" },
    { id: 3, likesCount: 3, message: "Friend" },
    { id: 4, likesCount: 4, message: "How" },
    { id: 5, likesCount: 5, message: "Are you?" },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "" as string,
  newPostText: null as string | null,
};

type InitialStateType = typeof initialState;

export const profileReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: +new Date(),
        message: action.newPostText,
        likesCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.postId),
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };

    default:
      return state;
  }
};

type addPostType = {
  type: typeof ADD_POST;
  newPostText: string;
};

export const addPost = (newPostText: string): addPostType => ({
  type: ADD_POST,
  newPostText,
});

type deletePostType = {
  type: typeof DELETE_POST;
  postId: number;
};
export const deletePost = (postId: number): deletePostType => ({
  type: DELETE_POST,
  postId,
});

type savePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: PhotosType;
};

export const savePhotoSuccess = (photos: PhotosType): savePhotoSuccessType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

type setUserProfileType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};
const setUserProfile = (profile: ProfileType): setUserProfileType => ({
  type: SET_USER_PROFILE,
  profile,
});

type setUserStatusType = {
  type: typeof SET_USER_STATUS;
  status: string;
};

const setUserStatus = (status: string): setUserStatusType => ({
  type: SET_USER_STATUS,
  status,
});

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(response.data));
};

export const updateUserStatus = (status: string) => async (dispatch: any) => {
  try {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) dispatch(setUserStatus(status));
  } catch (error) {}
};

export const savePhoto = (file: any) => async (dispatch: any) => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile: ProfileType) => async (
  dispatch: any,
  getState: any
) => {
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    const userId = getState().auth.userId;
    dispatch(getUserProfile(userId));
  } else {
    const errorMessage =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Something is wrong";

    const action = stopSubmit("edit-profile", { _error: errorMessage });
    dispatch(action);
    return Promise.reject(errorMessage);
  }
};
