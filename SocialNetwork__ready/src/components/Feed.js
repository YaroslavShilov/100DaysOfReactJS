import React from 'react';
import {Link} from "react-router-dom";
import TagList from "./TagList";
import AddToFavorites from "./AddToFavorites";

const Feed = ({articles}) => {
	return (
		<section>
			{
				articles.map(({author, createdAt, tagList, title, slug, description, favorited, favoritesCount}) => (
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
							
							<div className="pull-xs-right">
								<AddToFavorites
									isFavorited={favorited}
									favoritesCount={favoritesCount}
									articleSlug={slug}
								/>
							</div>
						</div>
						
						<Link to={`/articles/${slug}`} className={'preview-link'}>
							<h1>{title}</h1>
							<p>{description}</p>
							<span>Read more...</span>
							<TagList tags={tagList}/>
						</Link>
					</article>
				))//END articles.map
			}
		</section>
	);
}

export default Feed