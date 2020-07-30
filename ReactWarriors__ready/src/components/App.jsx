import React, {useEffect, useRef, useState} from "react";
import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";
import {API_URL, API_KEY_3} from '../utils/api';
import MovieTabs from "./MovieTabs";
import Willwatch from "./Willwatch";
import Pagination from "./Pagination";


export default () => {
	const [state, setState] = useState({
		movies: moviesData,
		moviesWillWatch: [],
		pages: 10,
		activePage: 1,
		sort_by: 'popularity.desc'
	})
	const prevSortBy = usePrevious(state.sort_by);
	
	const getMovies = (num) => {
		fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${state.sort_by}&page=${num}`)
			.then((response)=>{
				return response.json();
			})
			.then(data => {
				setState({
					...state,
					activePage: num,
					movies: data.results
				})
			})
	}
	
	const getPages = () => {
		fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${state.sort_by}&page`)
			.then((response) => {
				return response.json();
			})
			.then(data => {
				setState({
					...state,
					pages: data.total_pages,
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
	
	useEffect(() => {
		getMovies(state.activePage);
		getPages();
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		prevSortBy !== state.sort_by && getMovies(state.activePage)
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
			activePage: 1,
			sort_by: value,
		})
		
	}
	
	return (
		<div className="container">
			
			<div className="row mt-4">
				<div className="col-9">
					<div className="row mb-2">
						<div className="col-12">
							<MovieTabs
								sort_by={state.sort_by}
								updateSortBy={updateSortBy}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<Pagination
								active={state.activePage}
								pages={state.pages}
								getMovies={getMovies}
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
					<div className="row">
						<div className="col-12">
							<Pagination
								active={state.activePage}
								pages={state.pages}
								getMovies={getMovies}
							/>
						</div>
					</div>
				</div>
				<div className="col-3">
					<Willwatch moviesWillWatch={state.moviesWillWatch}/>
				</div>
			</div>
		</div>
	);
	
}
