import React from 'react';

export const MovieTabs = ({sort_by, updateSortBy}) => {
	
	const getClassLink = (sort) => {
		return `nav-link ${sort_by === sort && 'active'}`
	}
	
	const handleClick = (sort) => () => updateSortBy(sort);
	
	const mnuItemsData = [
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
	]
	
	const mnuItems = mnuItemsData.map((i, index) => {
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