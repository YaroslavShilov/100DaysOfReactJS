import React, {useEffect, useRef, useState} from "react";
import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";
import {API_URL, API_KEY_3} from '../utils/api';
import MovieTabs from "./MovieTabs";


export default () => {
	const [state, setState] = useState({
		movies: moviesData,
		moviesWillWatch: [],
		sort_by: 'popularity.desc'
	})
	const prevSortBy = usePrevious(state.sort_by);
	
	const getMovies = () => {
		fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${state.sort_by}`)
			.then((response)=>{
				return response.json();
			})
			.then(data => {
				setState({
					...state,
					movies: data.results
				})
			})
	}

	function usePrevious(value) {
		const ref = useRef();
		useEffect(() => {
			ref.current = value;
		});
		return ref.current;
	}
	
	useEffect(getMovies, [])

	useEffect(() => {
		prevSortBy !== state.sort_by && getMovies()
	})


	
	const deleteMovie = movie => {
		const updateMovies = state.movies.filter(item => item.id !== movie.id);
		setState({
			...state,
			movies: updateMovies
		});
	}

	const addMovieToWillWatch = movie => {
		console.log('add')

		const updateMoviesWillWatch = [...state.moviesWillWatch];
		updateMoviesWillWatch.push(movie);

		setState({
			...state,
			moviesWillWatch: updateMoviesWillWatch
		});
	};

	const deleteMovieFromWillWatch = movie => {
		const updateMoviesWillWatch = state.moviesWillWatch.filter(
			item => item.id !== movie.id
		);

		setState({
			...state,
			moviesWillWatch: updateMoviesWillWatch
		});
	};

	const updateSortBy = value => {
		setState({
			...state,
			sort_by: value,
		})
	}
	
	return (
		<div className="container">
			<div className="row mt-4">
				<div className="col-9">
					<div className="row mb-4">
						<div className="col-12">
							<MovieTabs
								sort_by={state.sort_by}
								updateSortBy={updateSortBy}
							/>
						</div>
					</div>
					<div className="row">

						{state.movies.map(movie => {
							return (
								<div className="col-6 mb-4" key={movie.id}>
									<MovieItem
										data={movie}
										deleteMovie={deleteMovie}
										addMovieToWillWatch={addMovieToWillWatch}
										deleteMovieFromWillWatch={deleteMovieFromWillWatch}
									/>
								</div>
							);
						})}
					</div>
				</div>
				<div className="col-3">
					<h4>Will Watch: {state.moviesWillWatch.length} movies</h4>
					<ul className="list-group">
						{state.moviesWillWatch.map(movie => (
							<li key={movie.id} className="list-group-item">
								<div className={"d-flex justify-content-between"}>
									<p>{movie.title}</p>
									<p>{movie.vote_average}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
	
}






// class App extends React.Component {
// 	constructor() {
// 		super();
//
// 		this.state = {
// 			movies: moviesData,
// 			moviesWillWatch: [],
// 			sort_by: 'popularity.desc'
// 		};
//
// 	}
//
// 	componentDidMount() {
// 		this.getMovies()
// 	}
//
// 	componentDidUpdate(prevProps, prevState) {
//
// 		if(prevState.sort_by !== this.state.sort_by) {
// 			//we have to change sort_by
// 			this.getMovies();
// 		}
// 	}
//
// 	getMovies = () => {
// 		fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`)
// 			.then((response)=>{
// 				return response.json();
// 			})
// 			.then(data => {
// 				this.setState({
// 					movies: data.results
// 				})
// 			})
// 	}
//
// 	deleteMovie = movie => {
// 		const updateMovies = this.state.movies.filter(item => item.id !== movie.id);
// 		// this.state.movies = updateMovies;
// 		this.setState({
// 			movies: updateMovies
// 		});
// 	};
//
// 	addMovieToWillWatch = movie => {
// 		const updateMoviesWillWatch = [...this.state.moviesWillWatch];
// 		updateMoviesWillWatch.push(movie);
//
// 		this.setState({
// 			moviesWillWatch: updateMoviesWillWatch
// 		});
// 	};
//
// 	deleteMovieFromWillWatch = movie => {
// 		const updateMoviesWillWatch = this.state.moviesWillWatch.filter(
// 			item => item.id !== movie.id
// 		);
//
// 		this.setState({
// 			moviesWillWatch: updateMoviesWillWatch
// 		});
// 	};
//
// 	updateSortBy = value => {
// 		this.setState({
// 			sort_by: value,
// 		})
// 	}
//
// 	render() {
// 		return (
// 			<div className="container">
// 				<div className="row mt-4">
// 					<div className="col-9">
// 						<div className="row mb-4">
// 							<div className="col-12">
// 								<MovieTabs
// 									sort_by={this.state.sort_by}
// 									updateSortBy={this.updateSortBy}
// 								/>
// 							</div>
// 						</div>
// 						<div className="row">
//
// 							{this.state.movies.map(movie => {
// 								return (
// 									<div className="col-6 mb-4" key={movie.id}>
// 										<MovieItem
// 											data={movie}
// 											deleteMovie={this.deleteMovie}
// 											addMovieToWillWatch={this.addMovieToWillWatch}
// 											deleteMovieFromWillWatch={this.deleteMovieFromWillWatch}
// 										/>
// 									</div>
// 								);
// 							})}
// 						</div>
// 					</div>
// 					<div className="col-3">
// 						<h4>Will Watch: {this.state.moviesWillWatch.length} movies</h4>
// 						<ul className="list-group">
// 							{this.state.moviesWillWatch.map(movie => (
// 								<li key={movie.id} className="list-group-item">
// 									<div className={"d-flex justify-content-between"}>
// 										<p>{movie.title}</p>
// 										<p>{movie.vote_average}</p>
// 									</div>
// 								</li>
// 							))}
// 						</ul>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }
