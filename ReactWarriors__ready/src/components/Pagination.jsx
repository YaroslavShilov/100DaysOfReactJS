import React from "react";

export default ({active, pages, getMovies}) => {
	
	function changePage(e, number) {
		e.preventDefault();
		
		if(number < 1) {
			getMovies(1)
		} else if (number > pages) {
			getMovies(pages)
		} else {
			getMovies(number)
		}
	}
	
	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination">
				<li className="page-item">
					<a className="page-link" href={'/'} onClick={(e) => changePage(e, active-1)}>Previous</a>
				</li>
				<li className={'page-item active'}>
					<span className="page-link">{active}</span>
				</li>
				<li className={'page-item'}>
					<span className="page-link">{pages}</span>
				</li>
				<li className="page-item">
					<a className="page-link" href={'/'} onClick={(e) => changePage(e, active+1)}>Next</a>
				</li>
			</ul>
		</nav>
	)
}