import React, {useState, useContext} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {ServerContext} from "../context/server/serverContext";

const Form = (props) => {
	
	const [value, setValue] = useState('');
	
	const changeHandler = (e) => setValue(e.target.value);
	const {show} = useContext(AlertContext);
	const {addNote} = useContext(ServerContext);
	
	const submitHandler = (e) => {
		e.preventDefault();
		
		if(value.trim()) {
			addNote(value.trim())
				.then(() => show('Success', 'success'))
				.catch(() => show('Something is wrong', 'danger'))
			setValue('')
		} else {
			show('Write name of task')
		}
		
		
	}
	
	return (
		<form onSubmit={submitHandler}>
			<div className="form-group">
				<input 
					type="text" 
					className="form-control"
					placeholder={'Name of task'}
					value={value}
					onChange={changeHandler}
				/>
			</div>
		</form>
	);
}

export default Form