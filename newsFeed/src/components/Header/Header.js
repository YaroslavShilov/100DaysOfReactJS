import React from 'react';
import './Header.css';

const Header = ({liked, allPosts}) => {
	return (
		<div className={'header d-flex'}>
			<h1>@NickName</h1>
			<h2>all {allPosts}, like {liked}</h2>
			
		</div>
	);
}

export default Header