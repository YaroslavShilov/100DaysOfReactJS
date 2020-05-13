import React, {useEffect, useState} from 'react';
import Car from "./components/Car/Car";
import cls from './App.module.scss';
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Counter from "./components/Counter/Counter";

export const ClickedContext = React.createContext(false);

export default (props) => {
	
	const [state, setState] = useState({
		clicked: false,
		cars: [
			{name: 'Tesla', year: 2020,},
			{name: 'Audi', year: 2019},
			{name: 'Ford', year: 2010}
		],
		pageTitle: 'React components',
		showCars: true,
	})
	
	const toggleCarsHandler = () => {
		setState({...state, showCars: !state.showCars})
	}

	const onChangeName = (name, index) => {
		const car = state.cars[index]
		car.name = name;
		const cars = [...state.cars];
		cars[index] = car;
		setState({
			...state,
			cars,
		})
	}
	const deleteCar = (inx) => {
		const cars = [...state.cars];
		cars.splice(inx, 1);
		setState({...state, cars})
	}

	const divStyle = {
		textAlign: 'center',
	}

	const cars = state.cars.map((car, inx) => (
		<ErrorBoundary key={inx}>
			<Car
				name={car.name}
				year={car.year}
				index={inx}
				onChangeName={(e) => onChangeName(e.target.value, inx)}
				onDelete={()=> deleteCar(inx)}
			/>
		</ErrorBoundary>
	));
	
	
	useEffect((e) => {
		//console.log('componentDidMount', state.showCars);
		return () => {
			//console.log('componentWillUnmount', state.showCars)
		}
	})
	//console.log('render', state.showCars)
	return (
		<div style={divStyle}>
			
			<h1>{state.pageTitle}</h1>
			<h1>{props.title}</h1>
			
			<ClickedContext.Provider value={state.clicked}>
				<Counter/>
			</ClickedContext.Provider>
			

			<button onClick={() => setState({...state, clicked: !state.clicked})}>
				Change clicked
			</button>
			
			<hr/>

			<button className={cls.AppButton} onClick={toggleCarsHandler}>
				{state.showCars
					? 'Hide Cars'
					: 'Show Cars'
				}
			</button>

			<div style={{
				width: 400,
				margin: 'auto',
				paddingTop: '20px',
			}}>
				{
					state.showCars && cars
				}
			</div>

		</div>
	);
}
