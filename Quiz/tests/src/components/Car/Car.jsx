import React from 'react';
import './Car.css';

export default ({name, year, onChangeName, onDelete}) => {
	
	const inputClasses = ['input'];
	
	name
		? inputClasses.push('green')
		: inputClasses.push('red')
	name.length > 4 && inputClasses.push('bold')
	return (
		<div className='car'>
			<h3>Car name: {name}</h3>
			<p>Year: {year}</p>
			<input 
				type="text" 
				onChange={onChangeName} 
				value={name}
				className={inputClasses.join(' ')}
			/>
			<button onClick={onDelete}>Delete</button>
		</div>
	)
	
}
