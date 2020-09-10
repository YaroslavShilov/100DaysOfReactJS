import React from "react";
import s from './FormsControls.module.css'

const FormControl = ({input, meta, Component, ...props}) => {
	const isError = meta.touched && meta.error;
	const classes = `${s.formControl} ${isError ? s.error : ''}`
	return (
		<div className={classes}>
			<Component {...input} {...props}/>
			{isError && <span>{meta.error}</span>}
		</div>
	)
}

export const Textarea = (props) => (
	<FormControl {...props} Component={'textarea'}/>

)

export const Input = (props) => (
	<FormControl {...props} Component={'input'}/>
)