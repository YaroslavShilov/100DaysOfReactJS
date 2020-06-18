import {DOWNLOAD, MINUS, PLUS, RESET, UPLOAD} from "./actionTypes";

export const countPlus = () => ({type: PLUS});
export const countMinus = () => ({type: MINUS});
export const countReset = () => ({type: RESET});
export const countDownload = (save) => ({type: DOWNLOAD, save});
export const countUpload = () => ({type: UPLOAD});