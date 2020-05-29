import React from 'react';
import './PostStatusFilter.css';

const PostStatusFilter = (props) => {
	return (
		<div className={'btn-group'}>
			<button type={'button'} className={'btn btn-info'}>All</button>
			<button type={'button'} className={'btn btn-outline-secondary'}>By like</button>
		</div>
	);
}

export default PostStatusFilter