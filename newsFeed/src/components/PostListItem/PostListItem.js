import React from 'react';
import './PostListItem.css';

const PostListItem = ({label, important = false}) => {
	
	let classNames = 'app-list-item d-flex justify-content-between';
	
	//important && (classNames += ' important');
	if(important) classNames += ' important';

	return (
		<div className={classNames}>
			<span className="app-list-item-label">
				{label}
			</span>
			<div className="d-flex justify-content-center align-items-center">
				<time className={'time'}>
					{new Date().getDate()}.
					{new Date().getMonth()}.
					{new Date().getFullYear()}
				</time>
				<button type='button' className={'btn-star btn-sm'}>
					<i className={'fa fa-star'}/>
				</button>
				<button type='button' className={'btn-trash btn-sm'}>
					<i className={'fa fa-trash-o'}/>
				</button>
				
				<i className={'fa fa-heart'}/>
			</div>
		</div>
	);
}

export default PostListItem