import React from 'react';

export const Form = ({gettingWeather}) => (
	<form onSubmit={
		(e) => gettingWeather(e)
	}>
		<input type="text" name={'city'} placeholder={'Your city'}/>
		<button>Get weather</button>
	</form>
)
