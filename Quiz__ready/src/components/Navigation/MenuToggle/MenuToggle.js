import React from "react";
import s from './MenuToggle.module.scss';

export default (props) => {
	const cls = [
		s.MenuToggle,
		'fa',
		
	];
	
	if(props.isOpen) {
		cls.push('fa-times')
		cls.push(s.open)
	} else {
		cls.push('fa-bars')
	}
	
	return (
		<i
			className={cls.join(' ')}
			onClick={props.onToggle}
		/>
	)
}