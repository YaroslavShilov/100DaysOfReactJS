import React, {useState} from "react";

export default (props) => {
	const [state, setState] = useState({
		willWatch: false
	})

	const {
		data,
		deleteMovie,
		addMovieToWillWatch,
		deleteMovieFromWillWatch
	} = props;
	
	const buttonWatch = () => {
		const boolean = state.willWatch;
		const cls = ['btn'];
		boolean ? cls.push('btn-success') : cls.push('btn-secondary');
		const funClick = () => {
			if(boolean) {
				setState({willWatch:false});
				deleteMovieFromWillWatch(data);
			} else {
				setState({willWatch:true});
				addMovieToWillWatch(data);
			}
		}
		const title = boolean ? "Won't Watch" : "Will Watch";
		return (
			<button
				type="button"
				className={cls.join(' ')}
				onClick={funClick}
			>
				{title}
			</button>
		)
	}
	
	return (
		<div className="card">
			<img
				className="card-img-top"
				src={`https://image.tmdb.org/t/p/w500${data.backdrop_path ||
				data.poster_path}`}
				alt=""
			/>
			<div className="card-body">
				<h6 className="card-title">{data.title}</h6>
				<div className="d-flex justify-content-between align-items-center">
					<p className="mb-0">Rating: {data.vote_average}</p>
					{buttonWatch()}
				</div>
				<button
					type="button"
					onClick={() => {
						deleteMovie(data);
					}}
				>
					Delete
				</button>
			</div>
		</div>
	)
}

