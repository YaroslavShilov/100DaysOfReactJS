import React from 'react';
import cls from './Car.module.scss';
import PropTypes from 'prop-types';
import withClass from "../hoc/withClass";


class Car extends React.Component {
	constructor(props) {
		super(props);
		
		this.inputRef = React.createRef();
	}
	
	componentDidMount() {
		if(this.props.index === 0) {
			this.inputRef.current.focus();
		}
		
	}
	
	render() {
		const {name, year, onChangeName, onDelete} = this.props
		
		const inputClasses = [cls.input];
		name
			? inputClasses.push(cls.green)
			: inputClasses.push(cls.red)
		
		name.length > 4 && inputClasses.push(cls.bold)

		
		
		return (
			<React.Fragment>
				<h3>Car name: {name}</h3>
				<p>Year: {year}</p>
				<input
					ref={this.inputRef}//получаем фокус к элементу
					type="text"
					onChange={onChangeName}
					value={name}
					className={inputClasses.join(' ')}
				/>
				<button onClick={onDelete}>Delete</button>
			</React.Fragment>
		)
	}
	
}

Car.propTypes = { //npm i prop-types
	//указываем ожидаемые значения свойств в пропсе
	name: PropTypes.string.isRequired, //isRequired - не запускать без него
	year: PropTypes.number,
	index: PropTypes.number,
	onChangeName: PropTypes.func,
	onDelete: PropTypes.func,
}

export default withClass(Car, cls.car);