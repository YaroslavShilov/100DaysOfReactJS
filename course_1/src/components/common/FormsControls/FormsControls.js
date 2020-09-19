import React from "react";
import s from './FormsControls.module.css'
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, Component, ...props}) => {
	const isError = touched && error;
	const classes = `${s.formControl} ${isError ? s.error : ''}`
	return (
		<div className={classes}>
			<Component {...input} {...props}/>
			{isError && <span>{error}</span>}
		</div>
	)
}

export const Textarea = (props) => (
	<FormControl {...props} Component={'textarea'}/>

)

export const Input = (props) => (
	<FormControl {...props} Component={'input'}/>
)

export const createField = (placeholder, name, validators, component, props = {}, text = '') => (
	<>
		<Field
			name={name}
			component={component}
			validate={validators}
			placeholder={placeholder}
			{...props}
		/>
		{text}
	</>
)