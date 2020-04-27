import React from "react";
import {moviesData} from '../moviesData';
import {MovieItem} from "./MovieItem";


export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			movies: moviesData,
		};
	}

	removeMovies(movie) {
		const updateMovies = this.state.movies.filter((i) => {
			return i.id !== movie.id;
		});

		this.setState({movies : updateMovies})
	}
	
	
  render() {
		
	  return (
		  <div>
			  {this.state.movies.map((movie) => {
				  return (
				    <MovieItem movie={movie} key={movie.id} removeMovies={()=>this.removeMovies(movie)}/>
					);
			  })}
			
			</div>
	  );
  };
	
}
