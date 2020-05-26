import React from "react";
import s from './AnswerItem.module.scss';

export default props => {
	const cls = [s.AnswerItem];
	
	if (props.state) {
		cls.push(s[props.state])
	}
	
	return (
		<li 
			className={cls.join(' ')}
			onClick={() => {props.onAnswerClick(props.answer.id)}}
		>
			{props.answer.text}
		</li>
	)
}