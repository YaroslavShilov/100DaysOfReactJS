import React from 'react';
import './SearchPanel.css';
import {Input} from "reactstrap";

const SearchPanel = (props) => {
	return (
		<Input
			className={'form-control search-input'}
			placeholder={'Search'}
		/>
	);
}

export default SearchPanel