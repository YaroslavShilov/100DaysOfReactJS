import React from "react";

export default ({moviesWillWatch}) => {
	return (
		<>
			<h4>Will Watch: {moviesWillWatch.length} movies</h4>
			<ul className="list-group">
				{moviesWillWatch.map(i => (
					<li key={i.id} className="list-group-item">
						<div className={"d-flex justify-content-between"}>
							<p>{i.title}</p>
							<p>{i.vote_average}</p>
						</div>
					</li>
				))}
			</ul>
		</>
	)
}