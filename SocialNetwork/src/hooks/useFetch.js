import {useEffect, useState} from "react";
import axios from "axios";

export default url => {
	const baseUrl = 'http://conduit.productionready.io/api'
	const [isLoading, setIsLoading] = useState(false);
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [options, setOptions] = useState({})
	
	const doFetch = (options = {}) => {
		setIsLoading(true);
		setOptions(options);
	}

	useEffect(() => {
		if(!isLoading) {
			return
		}
		
		axios(`${baseUrl}${url}`, options)
			.then(res => {
				console.log('success', res)
				setIsLoading(false)
				setResponse(res.data)
			}).catch(err => {
				console.log('err', err)
				setIsLoading(false)
				setError(err.response.data)
			})
		// eslint-disable-next-line
	}, [isLoading])
	
	return [{isLoading, response, error}, doFetch];
}