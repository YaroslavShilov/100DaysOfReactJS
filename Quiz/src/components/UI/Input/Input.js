import React from 'react';
import s from './Input.module.scss';

function isInvalid({valid, touched, shouldValidate}) {
	return !valid && shouldValidate && touched;
}

export default (props) => {
		
	const inputType = props.type || 'text';
	const cls = [s.Input]
	const htmlFor = `${inputType}-${Math.random()}`
	
	if(isInvalid(props)) {
		cls.push(s.invalid)
	}
	
	return (
		<div className={cls.join(' ')}>
			<label htmlFor={htmlFor}>{props.label}</label>
			<input 
				type={inputType}
				id={htmlFor}
				value={props.value}
				onChange={props.onChange}
			/>
			
			{
				isInvalid(props) && <span>{props.errorMessage || 'write right value'}</span>
			}
			
			
		</div>
	)
}