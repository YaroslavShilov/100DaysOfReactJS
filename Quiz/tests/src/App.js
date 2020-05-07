import React from 'react';
import Car from "./components/Car/Car";

class App extends React.Component {
	
	state = {
		cars: [
			{name: 'Tesla', year: 2020,},
			{name: 'Audi', year: 2019},
			{name: 'Ford', year: 2010}
		],
		pageTitle: 'React components',
		showCars: true,
	}
	
	toggleCarsHandler = () => {
		this.setState({showCars: !this.state.showCars})
	}

	onChangeName = (name, index) => {
		const car = this.state.cars[index]
		car.name = name;
		const cars = [...this.state.cars];
		cars[index] = car;
		this.setState({
			cars,
		})
	}
	deleteCar = (inx) => {
		/*const cars = [
			...this.state.cars.slice(0,inx), 
			...this.state.cars.slice(++inx, this.state.cars.length)
		]*/
		
		const cars = [...this.state.cars];
		cars.splice(inx, 1);
		this.setState({cars})
	}
	
	render() {
		const divStyle = {
			textAlign: 'center',
		}
		
		const cars = this.state.cars.map((car, inx) => (
			<Car 
				key={inx} 
				name={car.name} 
				year={car.year}
				onChangeName={(e) => this.onChangeName(e.target.value, inx)}
				onDelete={()=> this.deleteCar(inx)}
			/>
		));
		
		return (
			<div className={divStyle}>
				<h1>{this.state.pageTitle}</h1>
				
				<button onClick={this.toggleCarsHandler}>
					{this.state.showCars
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
						this.state.showCars && cars
					}
				</div>
				
			</div>
		);
	}	
}

export default App;
