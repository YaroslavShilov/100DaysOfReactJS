import React from "react";
import {moviesData} from './moviesData';


export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			movies: moviesData,
		} 
	}
	
  render() {
		
	  return (
		  <div>{this.state.movies.map((movie) => <p>{movie.title}</p>)}</div>
	  );
  };
	
}
