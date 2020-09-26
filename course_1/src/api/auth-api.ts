import {
  instance,
  APIResponseType,
  ResultCodeForCaptcha,
  ResultCodesEnum,
} from "./api";

type meDataType = {
  id: number;
  email: string;
  login: string;
};

type loginDataType = {
  userId: number;
};

export const authAPI = {
  me: () =>
    instance
      .get<APIResponseType<meDataType>>(`auth/me`)
      .then((res) => res.data),

  login(
    email: string,
    password: string | number,
    rememberMe = false,
    captcha: null | string = null
  ) {
    const user = { email, password, rememberMe, captcha };
    return instance
      .post<
        APIResponseType<loginDataType, ResultCodesEnum | ResultCodeForCaptcha>
      >(`auth/login`, user)
      .then((res) => res.data);
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
