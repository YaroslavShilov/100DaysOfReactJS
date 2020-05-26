import {ADD, ADD2, ADD_NUMBER, ADD_NUMBER2, SUB, SUB2, SUB_NUMBER, SUB_NUMBER2} from "./actionTypes";

export const add = () => ({type: ADD});
export const sub = () => ({type: SUB});
export const addNumber = (payload) => ({type: ADD_NUMBER, payload});
export const subNumber = (payload) => ({type: SUB_NUMBER, payload});

export const add2 = () => ({type: ADD2});
export const sub2 = () => ({type: SUB2});
export const addNumber2 = (payload) => ({type: ADD_NUMBER2, payload});
export const subNumber2 = (payload) => ({type: SUB_NUMBER2, payload});

export const asyncAdd = (payload) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(addNumber2(payload))
		}, 3000)
	}
};