import React from 'react';
import s from './Alert.module.scss';

const Alert = ({type='danger', children}) => {
	return (
		<div className={`${s.alert} ${s[type]}`}>
			{children}
		</div>
	);
}

export default Alert