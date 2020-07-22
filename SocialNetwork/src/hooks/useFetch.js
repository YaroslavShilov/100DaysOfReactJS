import {useEffect, useState} from "react";
import axios from "axios";

import useLocalStorage from "./useLocalStorage";

export default url => {
	const baseUrl = 'http://conduit.productionready.io/api'
	const [isLoading, setIsLoading] = useState(false);
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [options, setOptions] = useState({})
	const [token] = useLocalStorage('token');
	
	const doFetch = (options = {}) => {
		setIsLoading(true);
		setOptions(options);
	}

	useEffect(() => {
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
				setIsLoading(false)
				setResponse(res.data)
			}).catch(err => {
				setIsLoading(false)
				setError(err.response.data)
			})
	}, [isLoading, options, url, token])
	
	return [{isLoading, response, error}, doFetch];
}