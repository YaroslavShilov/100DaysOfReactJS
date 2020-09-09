import React from "react";
import s from './FormsControls.module.css'

export const Textarea = ({input, placeholder}) => {
	return (
		<div className={s.formControl + " " + s.error}>
			<textarea {...input} placeholder={placeholder} />
			<span>some error</span>
		</div>
	)
}