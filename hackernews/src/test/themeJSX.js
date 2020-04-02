import React from 'react';

function ThemeJSX() {
	function formatName(user) {
		return user.firstName + ' ' + user.lastName;
	}
	function getGreeting(user) {
		if(user) {
			return <h1>Hello, {formatName(user)}!</h1>
		}
		return <h1>Hello, stranger!</h1>
	}

	const user = {
		firstName: 'Harper',
		lastName: 'Perez'
	};
	
	return (
		<div>
			{getGreeting(user)}
		</div>
	);
}

export default ThemeJSX;