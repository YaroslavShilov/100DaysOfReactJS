import React from 'react';
import './PostStatusFilter.css';
import {Button} from "reactstrap";

const PostStatusFilter = (props) => {
	return (
		<div className={'btn-group'}>
			<Button color={'info'}>All</Button>
			<Button color={'outline-secondary'}>By like</Button>
		</div>
	);
}

export default PostStatusFilter