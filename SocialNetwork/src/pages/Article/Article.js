import React, {useEffect} from 'react';
import useFetch from "../../hooks/useFetch";
import {Link} from "react-router-dom";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import TagList from "../../components/TagList";

const Article = ({match}) => {
	const slug = match.params.slug
	const apiUrl = `/articles/${slug}`
	
	const [{response, error, isLoading}, doFetch] = useFetch(apiUrl)
	
	useEffect(() => {
		doFetch();
	}, [doFetch])
	
	return (
		<article className={'article-page'}>
			<div className="banner">
				{!isLoading && response && (
					<div className={'container'}>
						<h1>{response.article.title}</h1>
						
						<div className={'article-meta'}>
							<Link to={`/profiles/${response.article.author.username}`}>
								<img src={response.article.author.image} alt={'Avatar'}/>
							</Link>
							
							<div className="info">
								<Link to={`/profiles/${response.article.author.username}`}>
									{response.article.author.username}
								</Link>
								<span className={'date'}>{response.article.createdAd}</span>
							</div>
							
						</div>
					</div>
				)}
			</div>
			
			<div className="container page">
				{isLoading && <Loading/>}
				{error && <ErrorMessage/>}
				{!isLoading && response && (
					<div className={'row.article-content'}>
						<div className="col-xs-12">
							<div>
								<p>{response.article.body}</p>
							</div>
							<TagList tags={response.article.tagList}/>
						</div>
					</div>
				)}
			</div>
			
		</article>
	);
}

export default Article