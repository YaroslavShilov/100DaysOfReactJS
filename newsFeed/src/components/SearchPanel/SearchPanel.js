import React from 'react';
import './SearchPanel.css';

const SearchPanel = (props) => {
	return (
		<input
			className={'form-control search-input'}
			type={'text'}
			placeholder={'Search'}
		/>
	);
}

export default SearchPanel