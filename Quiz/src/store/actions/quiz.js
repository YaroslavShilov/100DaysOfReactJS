import axios from '../../axios/axios-quiz';
import {
	FETCH_QUIZ_SUCCESS, 
	FETCH_QUIZES_ERROR, 
	FETCH_QUIZES_START, 
	FETCH_QUIZES_SUCCESS
} from "./actionTypes";

export function fetchQuizes() {
	return async dispatch => {
		
		dispatch(fetchQuizesStart());
		
		try {
			const response = await axios.get(`/quiz.json`)

			const quizes = [];
			Object.keys(response.data).forEach((key, inx) => {
				quizes.push({
					id: key,
					name: `Test #${inx + 1}`,
				})
			})
			
			dispatch(fetchQuizesSuccess(quizes))

		} catch (e) {
			
			dispatch(fetchQuizesError(e))
			
		}
	}
}

export function fetchQuizesStart () {
	return {
		type: FETCH_QUIZES_START,
	}
}

export function fetchQuizesSuccess(quizes) {
	return {
		type: FETCH_QUIZES_SUCCESS,
		quizes,
	}
}

export function fetchQuizSuccess(quiz) {
	return {
		type: FETCH_QUIZ_SUCCESS,
		quiz,
	}
}

export function fetchQuizesError(error) {
	return {
		type: FETCH_QUIZES_ERROR,
		error,
	}
}

export function fetchQuizById(quizId) {
	return async dispatch => {
		dispatch(fetchQuizesStart())

		try {
			const response = await axios.get(`/quiz/${quizId}.json`);
			const quiz = response.data;

			console.log(quiz);

			dispatch(fetchQuizSuccess(quiz))



		} catch (e) {
			dispatch(fetchQuizesError(e))
		}
		
	}
}