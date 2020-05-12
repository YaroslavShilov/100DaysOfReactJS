import React from 'react';
import Radium from 'radium';
import './Car.css';



const Car = ({name, year, onChangeName, onDelete}) => {
	
	const inputClasses = ['input'];
	
	name
		? inputClasses.push('green')
		: inputClasses.push('red')
	name.length > 4 && inputClasses.push('bold')
	
	const style = {
		border: '1px solid #ccc',
		boxShadow: '0 4px 5px 0 rgba(0,0,0, .14)',
		transition: 'all 0.5s ease',
		cursor: 'pointer',
		':hover': {
			border: '1px solid #aaa',
			boxShadow: '0 4px 15px 0 rgba(0,0,0, .25)',
		}
	}
	return (
		<div className='car' style={style}>
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

export default Radium(Car)