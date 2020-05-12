import React, {useState} from 'react';

export default (props) => {
	
	const [state] = useState([
		{
			title: 'Popularity desc',
			sort: 'popularity.desc',
		},
		{
			title: 'Revenue desc',
			sort: 'revenue.desc',
		},
		{
			title: 'Vote avetage desc',
			sort: 'vote_average.desc',
		}
	])
	
	const {sort_by, updateSortBy} = props;
	
	const getClassLink = (sort) => {
		return `nav-link ${sort_by === sort && 'active'}`
	}

	const handleClick = (sort) => () => updateSortBy(sort);

	const mnuItems = state.map((i, index) => {
		return (
			<li className="nav-item" key={index}>
				<div
					className={getClassLink(i.sort)}
					onClick={handleClick(i.sort)}
				>
					{i.title}
				</div>
			</li>
		)
	})

	return(
		<ul className="tabs nav nav-pills">
			{mnuItems}
		</ul>
	)
}