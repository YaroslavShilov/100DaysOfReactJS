import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));


//BEGIN state and lifecycle
/*
class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()}
	}
	
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(), 1000
		)
	}
	
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	
	tick() {
		this.setState({
			date: new Date()
		})
	}

	render() {
		return (
			<div>
				<h1>Hello world!</h1>
				<h2>Now {this.state.date.toLocaleTimeString()}</h2>
			</div>
		)
	}
}

function App() {
	return (
		<>
			<Clock />
			<Clock />
			<Clock />
		</>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
*/
//END state and lifecycle

//BEGIN Handing-events
/*class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true};
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick() {
		this.setState(state => {
			return {isToggleOn: !this.state.isToggleOn}
		});
	}
	
	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.isToggleOn ? 'on' : 'off'}
			</button>
		)
	}
}

ReactDOM.render (
	<Toggle/>,
	document.getElementById('root')
)*/
//END Handing-events

//BEGIN conditional rendering

/*class LoginControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isLoggedIn: false}
	}
	
	handleLoginClick = () => {
		this.setState({isLoggedIn: true})
	}
	
	hadleLogoutClick = () => {
		this.setState({isLoggedIn: false})
	}
	
	render() {
		const isLoggedIn = this.state.isLoggedIn;
		let button;
		if (isLoggedIn) {
			button = <LogoutButton onClick={this.handleLoginClick} />
		} else {
			button = <LoginButton onClick={this.hadleLogoutClick} />
		}
		
		return (
			<div>
				<Greeting isLoggedIn={isLoggedIn} />
				{button}
			</div>
		)
	}
	
}*/
//END conditional rendering

//BEGIN forms
class NameForm extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			value: '',
			select: 'coconut',
		};
	}
	
	handleChange = (e) => {
		this.setState({value: e.target.value});
	}
	handleSelect = (e) => {
		this.setState({select: e.target.value});
	}
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state)
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<input type="text" value={this.state.value} onChange={this.handleChange}/>
					<textarea value={this.state.value} onChange={this.handleChange}/>
					
					<select value={this.state.select} onChange={this.handleSelect}>
						<option value={'grapefruit'}>grapefruit</option>
						<option value={'lime'}>lime</option>
						<option value={'coconut'}>coconut</option>
						<option value={'mango'}>mango</option>
					</select>
					
				</label>
				<button>Send</button>
			</form>
		)
	}
}

class Reservation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isGoing: false,
			numberOfGuests: 1
		};
	}
	
	handleInputChange = (e) => {
		const target = e.target;
		const value = target.name === 'isGoing' ? target.checked : target.value;
		const name = target.name;
		
		this.setState({
			[name]: value
		});
	}
	
	render() {
		return (
			<form>
				<label>
					Go:
					<input 
						type="checkbox"
						name={'isGoing'}
						checked={this.state.isGoing}
						onChange={this.handleInputChange}
					/>
				</label>
				<br/>
				<label>
					How many guests?
					<input 
						type="number"
						name={'numberOfGuests'}
						value={this.state.numberOfGuests}
						onChange={this.handleInputChange}
					/>
				</label>
			</form>
		)
	}

}

ReactDOM.render(
	<Reservation/>, document.getElementById('root')
)

//END forms