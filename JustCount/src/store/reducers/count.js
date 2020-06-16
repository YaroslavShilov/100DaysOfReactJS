import {DOWNLOAD, MINUS, PLUS, RESET, UPLOAD} from "../actions/actionTypes";
import {URL} from "../../API/URL";

const initialState = 0;

export default function countReducer(state=initialState, action) {
	switch (action.type) {
		case PLUS: return ++state;
		case MINUS: return --state;
		case RESET: return 0;
		case UPLOAD: 
			const saveItem = {
				const: state,
				id: (+new Date()).toString(16)
			}
			fetch(`${URL}numbers`, {
				method: 'POST',
				body: JSON.stringify(saveItem),
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then(() => console.log('success upload, you saved your number'))
				.catch(err => console.log(err))
			return state;
			
		case DOWNLOAD:
			const save = [...action.save];
			return save[save.length-1].const;
		
		default: return state;
	}
}