import React, {useState} from 'react';
import './PostAddForm.css';
import {Button, Input, InputGroup, InputGroupAddon} from "reactstrap";

const PostAddForm = ({onAdd}) => {
	
	const [state, setState] = useState({
		value: '',
	});
	
	const onSubmit = (e) => {
		e.preventDefault();
		onAdd(state.value)
		setState({
			...state,
			value: '',
		})
	}
	
	const onValueChange = (e) => {
		setState({
			...state,
			value: e.target.value,
		})
	}
	
	return (
		<form className={'bottom-panel d-flex'} onSubmit={onSubmit}>
			<InputGroup>
				<Input 
					placeholder={'Write something'} 
					className={'new-post-label'}
					onChange={onValueChange}
					value={state.value}
					required
				/>
				<InputGroupAddon addonType="append">
					<Button color="outline-secondary">Add</Button>
				</InputGroupAddon>
			</InputGroup>
		</form>
	);
}

export default PostAddForm