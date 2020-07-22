import React from 'react';

const BackendErrorMessages = ({backendErrors}) => {
	
	const errorMessages = Object.keys(backendErrors).map(
		name => `${name} ${backendErrors[name].join(' ')}`
	);
	
	console.log(errorMessages)
	
	return (
		<ul className={'error-messages'}>
			{errorMessages.map(errorMessage => <li key={errorMessage}> {errorMessage} </li>)}
		</ul>
	);
}

export default BackendErrorMessages