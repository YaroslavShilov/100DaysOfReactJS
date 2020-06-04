import React from 'react';
import './PostStatusFilter.css';

const PostStatusFilter = ({filter, onFilterSelect}) => {
	
	const state = [
		{name: 'all', label: 'All'},
		{name: 'like', label: 'By like'},
	];
	
	const buttons = state.map(({name, label}) => {
		const active = filter === name;
		const cls = active ? 'btn-info' : 'btn-outline-secondary';
		
		return (
			<button 
				key={name} 
				className={`btn ${cls}`}
				onClick={() => onFilterSelect(name)}
			>{label}</button>
		)
	})
	
	
	return (
		<div className={'btn-group'}>
			{buttons}
		</div>
	);
}

export default PostStatusFilter