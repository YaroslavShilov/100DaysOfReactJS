import React from 'react';

export const MovieItem = ({movie, removeMovies}) => {
	return <div>
		<p>{movie.title}</p>
		<button onClick={removeMovies}>Delite movie</button>
	</div>
};
