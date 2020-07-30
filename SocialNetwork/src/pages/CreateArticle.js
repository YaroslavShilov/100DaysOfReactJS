import React, {useContext, useEffect, useState} from 'react';
import ArticleForm from "../components/ArticleForm";
import useFetch from "../hooks/useFetch";
import {Redirect} from "react-router-dom";
import {CurrentUserContext} from "../context/currentUser";

const CreateArticle = () => {
	
	const apiUrl = '/articles'
	const [{response, error}, doFetch] = useFetch(apiUrl)
	const [currentUserState] = useContext(CurrentUserContext)
	const initialValues = {
		title: '',
		description: '',
		body: '',
		tagList: []
	}
	const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false)
	
	const handleSubmit = article => {
		doFetch({
			method: 'post',
			data: {
				article
			}
		})
	}
	
	useEffect(() => {
		if(!response) return
		
		setIsSuccessfullSubmit(true)
	}, [response])
	
	if(currentUserState.isLoggedIn === false) return <Redirect to={`/`} />
	
	if(isSuccessfullSubmit) return <Redirect to={`/articles/${response.article.slug}`} />
	
	return (
		<div>
			<ArticleForm 
				errors={(error && error.errors) || {}} 
				initialValues={initialValues} 
				onSubmit={handleSubmit}
			/>
		</div>
	);
}

export default CreateArticle