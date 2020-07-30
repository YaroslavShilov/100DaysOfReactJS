import React, {useContext, useEffect, useState} from 'react';
import useFetch from "../hooks/useFetch";
import ArticleForm from "../components/ArticleForm";
import {Redirect} from "react-router-dom";
import {CurrentUserContext} from "../context/currentUser";

const EditArticle = ({match}) => {
	const slug = match.params.slug
	const [currentUserState] = useContext(CurrentUserContext)
	const apiUrl = `/articles/${slug}`
	const [{response: updateArticleResponse, error: updateArticleError}, doUpdateArticle] = useFetch(apiUrl)
	const [{response: fetchArticleResonse}, doFetchArticle] = useFetch(apiUrl)
	const [initialValues, setInitialValues] = useState(null)
	const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false)
	
	
	const handleSubmit = article => {
		doUpdateArticle({
			method: 'put',
			data: {
				article
			}
		})
	}
	
	useEffect(() => {
		doFetchArticle()
	}, [doFetchArticle])
	
	useEffect(() => {
		if(!fetchArticleResonse) return
		const {title, description, body, tagList} = fetchArticleResonse.article
		
		setInitialValues({
			title,
			description,
			body,
			tagList
		})
	}, [fetchArticleResonse])
	
	useEffect(() => {
		if(!updateArticleResponse) return
		setIsSuccessfullSubmit(true)
	}, [updateArticleResponse])
	
	if(currentUserState.isLoggedIn === false) return <Redirect to={'/'}/> 
	
	if(isSuccessfullSubmit) return <Redirect to={`/articles/${slug}`}/>
	
	return (
		<ArticleForm
			onSubmit={handleSubmit}
			errors={(updateArticleError && updateArticleError.errors) || {}}
			initialValues={initialValues}
		/>
	);
}

export default EditArticle