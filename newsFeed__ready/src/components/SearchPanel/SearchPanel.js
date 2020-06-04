import React, {useState} from 'react';
import './SearchPanel.css';
import {Input} from "reactstrap";

const SearchPanel = (props) => {
	const [state, setState] = useState({
		term: '',
	});
	
	const onUpdateSearch = (e) => {
		const term = e.target.value;
		setState({...state, term})
		props.onUpdateSearch(term);

	}
	
	return (
		<Input
			className={'form-control search-input'}
			placeholder={'Search'}
			onChange={onUpdateSearch}
		/>
	);
}

export default SearchPanel