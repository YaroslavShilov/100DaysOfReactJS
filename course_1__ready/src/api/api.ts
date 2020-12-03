import axios from "axios";
import { UserType } from "../types/types";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "245f4fb1-f95a-47ec-b534-edb4329d7ea7",
    //"API-KEY": "8615da00-c340-41c4-b7de-7e144d693981"
  },
});

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodeForCaptcha {
  CaptchaIsRequired,
}

export type GetItemsType = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
};
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
  data: D;
  messages: Array<string>;
  resultCode: RC;
};
