import React from 'react';
import {useHistory} from 'react-router-dom';

export const AboutPage: React.FC = (props) => {
	const history = useHistory()
	return (
		<div>
			<h1>I'm the Information page</h1>
			<button
				className={'btn'}
				onClick={() => history.push('/')}
			>Get back to Tasks</button>
		</div>
	);
}
