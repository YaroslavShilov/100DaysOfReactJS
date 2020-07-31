import {useEffect, useState, useCallback} from "react";
import axios from "axios";

import useLocalStorage from "./useLocalStorage";

export default url => {
	const baseUrl = 'http://conduit.productionready.io/api'
	const [isLoading, setIsLoading] = useState(false);
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [options, setOptions] = useState({})
	const [token] = useLocalStorage('token');
	
	const doFetch = useCallback((options = {}) => {
		setIsLoading(true);
		setOptions(options);
	}, [])

	useEffect(() => {
		let skipGetResponseAfterDestroy = false
		
		const requestOptions = {
			...options,
			...{
				headers: {
					authorization: token ? `Token ${token}` : '',
				}
			}
		}
		if(!isLoading) {
			return
		}
		
		axios(`${baseUrl}${url}`, requestOptions)
			.then(res => {
				if(!skipGetResponseAfterDestroy) {
					setIsLoading(false)
					setResponse(res.data)
				}
				
			}).catch(err => {
				if(!skipGetResponseAfterDestroy) {
					setIsLoading(false)
					setError(err.response.data)
				}
			})
		
		return () => {
			skipGetResponseAfterDestroy = true;
		}
	}, [isLoading, options, url, token])
	
	return [{isLoading, response, error}, doFetch];
}