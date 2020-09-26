import { ResultCodeForCaptcha, ResultCodesEnum } from "../api/api";
import { stopSubmit } from "redux-form";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./redux-store";
import { authAPI } from "../api/auth-api";
import { securityAPI } from "../api/security-api";

const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  userId: null as null | number,
  email: null as null | string,
  login: null as null | string,
  isAuth: false as boolean,
  captchaUrl: null as string | null, // if it's null, then captcha isn't required
};

type ActionsTypes = SetAuthUserDataType | GetCaptchaUrlSuccessType;

//type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = ThunkAction<Promise<any>, AppStateType, unknown, ActionsTypes>;

export type InitialStateType = typeof initialState;

export const authReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

type SetAuthUserDataType = {
  type: typeof SET_USER_DATA;
  payload: {
    userId: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
  };
};

const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDataType => ({
  type: SET_USER_DATA,
  payload: {
    userId,
    email,
    login,
    isAuth,
  },
});

export const getAuthUserDate = (): ThunkType => async (dispatch) => {
  const meData = await authAPI.me();
  if (meData.resultCode === ResultCodesEnum.Success) {
    let { login, id: userId, email } = meData.data;
    dispatch(setAuthUserData(userId, email, login, true));
  }
};

export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
): ThunkType => async (dispatch: any) => {
  const loginData = await authAPI.login(email, password, rememberMe, captcha);
  if (loginData.resultCode === ResultCodesEnum.Success) {
    //success, get auth data
    dispatch(getAuthUserDate());
  } else {
    if (loginData.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
      dispatch(getCaptchaUrl());
    }

    const errorMessage =
      loginData.messages.length > 0
        ? loginData.messages[0]
        : "Something is wrong";

    const action = stopSubmit("login", { _error: errorMessage });
    dispatch(action);
  }
};

export const logout = (): ThunkType => async (dispatch: any) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === ResultCodesEnum.Success) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

type GetCaptchaUrlSuccessType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS;
  payload: {
    captchaUrl: string;
  };
};

const getCaptchaUrlSuccess = (
  captchaUrl: string
): GetCaptchaUrlSuccessType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const getCaptchaUrl = (): ThunkType => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};
