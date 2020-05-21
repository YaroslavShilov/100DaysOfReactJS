import axios from 'axios';

export default axios.create({
	baseURL: 'https://react-quiz-86bda.firebaseio.com',
})