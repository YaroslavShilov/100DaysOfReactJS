import {DOWNLOAD, MINUS, PLUS, RESET, UPLOAD} from "./actionTypes";

export const countPlus = () => ({type: PLUS});
export const countMinus = () => ({type: MINUS});
export const countReset = () => ({type: RESET});
export const countDownload = () => ({type: DOWNLOAD});
export const countUpload = () => ({type: UPLOAD});