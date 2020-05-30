import React from 'react';
import './PostAddForm.css';
import {Button, Input, InputGroup, InputGroupAddon} from "reactstrap";

const PostAddForm = () => {
	return (
		<form className={'bottom-panel d-flex'}>
			<InputGroup>
				<Input placeholder={'Write something'} className={'new-post-label'}/>
				<InputGroupAddon addonType="append">
					<Button color="outline-secondary">Add</Button>
				</InputGroupAddon>
			</InputGroup>
		</form>
	);
}

export default PostAddForm