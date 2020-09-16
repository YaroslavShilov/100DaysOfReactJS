import React from 'react';
import s from "./Paginator.module.css";

export const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
	const pagesCount = Math.ceil(totalUsersCount / pageSize);

	const pages = [];
	for(let i=1; i<=pagesCount; i++) {
		pages.push(i);
	}


	return (
		<ul className={s.paginator}>
			{pages.map(i =>
				<li key={i}
				    className={currentPage === i ? s.active : ''}
				    onClick={()=> onPageChanged(i) }
				>{i}</li>
			)}
		</ul>
	);
}
