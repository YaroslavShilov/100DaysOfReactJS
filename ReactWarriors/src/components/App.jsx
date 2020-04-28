import React from "react";
import {moviesData} from '../moviesData';
import {MovieItem} from "./MovieItem";

// UI = fn(state,props)

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			movies: moviesData,
			moviesWillWatch: [],
		};
	}

	removeMovies(movie) {
		const updateMovies = this.state.movies.filter((i) => {
			return i.id !== movie.id;
		});

		this.setState({movies : updateMovies})
	}
	
	addMovieToWillWatch = movie => {
		/* long version
		const updateMoviesWillWatch = [...this.state.moviesWillWatch];
		updateMoviesWillWatch.push(movie);
		this.setState({moviesWillWatch: updateMoviesWillWatch})
		*/
		this.setState({moviesWillWatch: [...this.state.moviesWillWatch, movie]})
	}
	
	
  render() {
		
	  return (
		  <div className="container">
			  <div className={'row'}>
				  
				  <div className="col-9">
					  <div className={'row'}>
						  
							  {this.state.movies.map((movie) => {
								  return (
									  <div className={"col-6 mb-4"} key={movie.id}>
									    <MovieItem 
										    movie={movie} 
										    removeMovies={()=>this.removeMovies(movie)} 
										    addMovieToWillWatch={()=>this.addMovieToWillWatch(movie)}
									    />
									  </div>
								  );
							  })}
						  
					  </div>
					  
				  </div>
				  
				  <div className="col-3">
					  <p>Will Watch: {this.state.moviesWillWatch.length}</p>
				  </div>
			  </div>
			  
			
			</div>
	  );
  };
	
}
