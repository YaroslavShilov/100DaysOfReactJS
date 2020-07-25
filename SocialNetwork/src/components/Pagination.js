import React from 'react';
import {range} from "../utils";
import {Link} from "react-router-dom";
import classNames from 'classnames'

const PaginationItem = ({url, page, currentPage}) => {
	const liClasses = classNames({
		'page-item': true,
		'active': currentPage === page,
	})
	
	return (
		<li className={liClasses}>
			<Link to={`${url}?page=${page}`} className={'page-link'}>{page}</Link>
		</li>
	)
}

const Pagination = ({currentPage, limit, url, total}) => {
	const pagesCount = Math.ceil(total/limit);
	const pages = range(1, pagesCount)
	
	return (
		<ul className={'pagination'}>
			{pages.map(page => (
				<PaginationItem
					key={page}
					url={url}
					currentPage={currentPage}
					page={page}
				/>
			))}
		</ul>
	);
}

export default Pagination