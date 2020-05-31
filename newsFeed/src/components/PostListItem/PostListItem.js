import React, {useState} from 'react';
import './PostListItem.css';
import {Button, Input, InputGroup} from "reactstrap";
import Alert from "../Alert/Alert";


const PostListItem = ({label, important = false, deleteItem}) => {
	
	const [state, setState] = useState({
		important,
		like: false,
		label,
		change: false,
		alert: false,
		
	})
	
	const onImportant = () => {
		setState({
			...state,
			important: !state.important,
		})
	}
	const onLike = () => {
		setState({
			...state,
			like: !state.like,
		})
	}
	const onEdit = () => {
		setState({
			...state,
			change: !state.change,
		})
	}
	const onDelete = () => {
		setState({
			...state, 
			alert: !state.alert,
		});
	}
	
	//BEGIN classNames
	let classNames = 'app-list-item d-flex justify-content-between';
	if(state.important) classNames += ' important';
	if(state.like) classNames += ' like';
	//END classNames
	
	
	//BEGIN label
	const changeLabel = (value) => {
		setState({
			...state,
			label: value,
		})
	}
	let content;
	if(state.change) {
		content = (
			<InputGroup className="app-list-item-label d-flex">
				<Input 
					className={'form-control edit-input'} 
					value={state.label} 
					onChange={(e) => {changeLabel(e.target.value)}}
				/>
				<Button color={'outline-secondary'} onClick={onEdit}>apply</Button>
			</InputGroup>
		)
	} else {
		content = (
			<span className="app-list-item-label" onClick={onLike}>
				{state.label}
			</span>
		)
	}
	//END label
	
	//BEGIN alert
	const alert = (
		<Alert type={'danger'}>
			Do you really want to delete this post?
			<div className={'d-flex justify-content-center align-items-center buttons'}>
				<button
					className={'btn-alert btn-sm'}
					onClick={deleteItem}
				>
					<i className={'fa fa-check'}/>
				</button>
				<button
					className={'btn-alert btn-sm'}
					onClick={() => setState({...state, alert: false})}
				>
					<i className={'fa fa-times'}/>
				</button>
			</div>
		</Alert>
	)
	//END alert

	return (<>
		
		<div className={classNames}>
			{content}
			
			<div className="d-flex justify-content-center align-items-center buttons">
				<time className={'time'}>
					{new Date().getDate()}.
					{new Date().getMonth()}.
					{new Date().getFullYear()}
				</time>
				<button 
					type='button' 
					className={'btn-star btn-sm'}
					onClick={onImportant}
				>
					<i className={'fa fa-star'}/>
				</button>
				<button 
					type='button' 
					className={'btn-edit btn-sm'}
					onClick={onEdit}
				>
					<i className={'fa fa-edit'}/>
				</button>
				<button 
					type='button' 
					className={'btn-trash btn-sm'}
					onClick={onDelete}
				>
					<i className={'fa fa-trash-o'}/>
				</button>

				<i className={'fa fa-heart'}/>
				
				
			</div>
		</div>

		{state.alert && alert}
		
	</>);
}

export default PostListItem