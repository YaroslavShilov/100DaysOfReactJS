import React from "react";
import s from './Select.module.scss';

export const Select = props => {
	const htmlFor = `${props.label}-${Math.random()}`
	
	return (
		<div className={s.Select}>
			<label htmlFor={htmlFor}>{props.label}</label>
			<select
				id={htmlFor}
				value={props.value}
				onChange={props.onChange}
			>
				{props.options.map((i,inx) => {
					return (
						<option
							value={i.value}
							key={i.value + inx}
							
						>
							{i.text}
						</option>
					)
				})}
				
			</select>
		</div>
	)
}