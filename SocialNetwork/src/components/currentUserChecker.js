import {useContext, useEffect} from 'react';
import useFetch from "../hooks/useFetch";
import {CurrentUserContext} from "../context/currentUser";
import useLocalStorage from "../hooks/useLocalStorage";

const CurrentUserChecker = ({children}) => {
	const [{response}, doFetch] = useFetch('/user')
	const [, setCurrentUserState] = useContext(CurrentUserContext)
	const [token] = useLocalStorage('token')
	
	useEffect(() => {
		if(!token) {
			setCurrentUserState(state => ({
				...state,
				isLoggedIn: false,
			}))
			return
		}
		
		console.log('init');
		doFetch();
		setCurrentUserState(state => ({
			...state,
			isLoading: true,
		}))
		// eslint-disable-next-line
	}, [])
	
	useEffect(() => {
		if(!response) return
		
		setCurrentUserState(state => ({
			...state,
			isLoggedIn: true,
			isLoading: false,
			currentUser: response.user
		}))
		// eslint-disable-next-line
	}, [response])
	
	return children;
}

export default CurrentUserChecker