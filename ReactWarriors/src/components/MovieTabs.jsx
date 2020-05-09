import React from 'react';

export class MovieTabs extends React.Component {
	
	//**TODO use hooks
	
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log('nextProps', nextProps.sort_by);
		console.log('thisProps', this.props.sort_by);
		if(nextProps.sort_by !== this.props.sort_by) {
			return true //только когда есть изменения, производить ререндер
		}
		return false;
	}

	render() {
		const {sort_by, updateSortBy} = this.props
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
}