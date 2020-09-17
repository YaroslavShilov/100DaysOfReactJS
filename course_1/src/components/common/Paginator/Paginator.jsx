import React, {useState} from 'react';
import s from "./Paginator.module.css";

export const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize=10}) => {
	const pagesCount = Math.ceil(totalItemsCount / pageSize);

	const pages = [];
	for(let i=1; i<=pagesCount; i++) {
		pages.push(i);
	}

	const portionCount = Math.ceil(pagesCount / portionSize);
	const [portionNumber, setPortionNumber] = useState(1);
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	const rightPortionPageNumber = portionNumber * portionSize;

	const onLeftButtonHandler = () => setPortionNumber(portionNumber - 1)
	const onRightButtonHandler = () => setPortionNumber(portionNumber + 1)

	const leftButton = portionNumber > 1
		? <button onClick={onLeftButtonHandler}>Prev</button>
		: null

	const rightButton = portionCount > portionNumber
		? <button onClick={onRightButtonHandler}>Next</button>
		: null

	return (
		<ul className={s.paginator}>
			{leftButton}

			{pages
				.filter(page => page >= leftPortionPageNumber && page<= rightPortionPageNumber)
				.map(page => (
					<li
						key={page}
						className={currentPage === page ? s.active : ''}
						onClick={() => onPageChanged(page) }
					>
						{page}
					</li>
				))
			}

			{rightButton}
		</ul>
	);
}
