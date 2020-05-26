import React from "react";
import s from './Button.module.scss'

export default (props) => {
	
	const cls = [
		s.Button,
		s[props.type]
	]
	
	return (
		<button
			onClick={props.onClick}
			className={cls.join(' ')}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	)
}