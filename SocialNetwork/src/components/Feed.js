import React from 'react';
import {Link} from "react-router-dom";

const Feed = ({articles}) => {
	return (
		<section>
			{
				articles.map(({author, createdAt, tagList, title, slug, description}) => (
					<article className={'article-preview'} key={createdAt}>
						<div className="article-meta">
							
							<Link to={`/profiles/${author.username}`}>
								<img src={author.image} alt="Avatar"/>
							</Link>
							
							<div className="info">
								<Link to={`/profiles/${author.username}`}>
									{author.username}
								</Link>
								<span className={'date'}>{createdAt}</span>
							</div>
													
						</div>
						
						<Link to={`/articles/${slug}`} className={'preview-link'}>
							<h1>{title}</h1>
							<p>{description}</p>
							<span>Read more...</span>
							<ul className="tag-list">
								{
									tagList.map(tag => (
										<li key={tag} className="tag-default tag-pill tag-outline">
											{tag}
										</li>
									))
								}
							</ul>
						</Link>
					</article>
				))//END articles.map
			}
		</section>
	);
}

export default Feed