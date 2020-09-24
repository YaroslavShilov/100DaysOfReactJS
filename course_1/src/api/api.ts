import axios from "axios";
import { ProfileType } from "../types/types";

let instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "245f4fb1-f95a-47ec-b534-edb4329d7ea7",
    //"API-KEY": "8615da00-c340-41c4-b7de-7e144d693981"
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userId: number) {
    return instance.post(`follow/${userId}`);
  },
  unFollow(userId: number) {
    return instance.delete(`follow/${userId}`);
  },
  getProfile(userId: number) {
    console.warn("Obsolete method. Please use profileAPI object");
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status });
  },
  savePhoto(photoFile: any) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
  },
  saveProfile(profile: ProfileType) {
    return instance.put(`profile`, profile);
  },
};

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodeForCaptcha {
  CaptchaIsRequired,
}

type meType = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};

type loginType = {
  data: {
    userId: number;
  };
  resultCode: ResultCodesEnum | ResultCodeForCaptcha;
  messages: string;
};

export const authAPI = {
  me: () => instance.get<meType>(`auth/me`).then((res) => res.data),

  login(
    email: string,
    password: string | number,
    rememberMe = false,
    captcha: null | string = null
  ) {
    const user = { email, password, rememberMe, captcha };
    return instance.post<loginType>(`auth/login`, user).then((res) => res.data);
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};
