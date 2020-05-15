import React, {useState} from "react";
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
/*
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
*/
//END forms

//BEGIN lifting state up
/*
const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>The water would boil.</p>;
	}
	return <p>The water would not boil.</p>;
}

function TemperatureInput({onTemperatureChange, temperature, scale}) {

	function handleChange(e) {
		onTemperatureChange(e.target.value);
	}

	return (
		<fieldset>
			<legend>Enter temperature in {scaleNames[scale]}:</legend>
			<input value={temperature}
			       onChange={handleChange} />
		</fieldset>
	);
}

function Calculator() {
	
	const [state, setState] = useState({
		temperature: '',
		scale: 'c',
	})

	function handleCelsiusChange(temperature) {
		setState({scale: 'c', temperature});
	}

	function handleFahrenheitChange(temperature) {
		setState({scale: 'f', temperature});
	}

	const scale = state.scale;
	const temperature = state.temperature;
	const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
	const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

	return (
		<div>
			<TemperatureInput
				scale="c"
				temperature={celsius}
				onTemperatureChange={handleCelsiusChange} />
			<TemperatureInput
				scale="f"
				temperature={fahrenheit}
				onTemperatureChange={handleFahrenheitChange} />
			<BoilingVerdict
				celsius={parseFloat(celsius)} />
		</div>
	);
}

ReactDOM.render(
	<Calculator />,
	document.getElementById('root')
);
*/
//END lifting state up

//BEGIN composition vs inheritance
/*
function FancyBorder(props) {
	return (
		<div className={'FancyBorder FancyBorder-' + props.color}>
			{props.children}
		</div>
	);
}

function Dialog(props) {
	return (
		<FancyBorder color="blue">
			<h1 className="Dialog-title">
				{props.title}
			</h1>
			<p className="Dialog-message">
				{props.message}
			</p>
			{props.children}
		</FancyBorder>
	);
}

const SignUpDialog = (props) => {
	const [state,setState] = useState({
		login: '',
	})

	const handleChange = (e) => {
		setState({login: e.target.value});
	}

	const handleSignUp = () => {
		alert(`Добро пожаловать на борт, ${state.login}!`);
	}

	return (
		<Dialog title="Программа исследования Марса"
		        message="Как к вам обращаться?">
			<input value={state.login}
			       onChange={handleChange} />
			<button onClick={handleSignUp}>
				Запишите меня!
			</button>
		</Dialog>
	);
}

function SplitPane(props) {
	return (
		<div className="SplitPane">
			<div className="SplitPane-left">
				{props.left}
			</div>
			<div className="SplitPane-right">
				{props.right}
			</div>
		</div>
	)
}

function App() {
	const Contacts = () => <h2>Contacts</h2> 
	const Chat = () => <h2>Chat</h2>
	
	return (<>
		<SignUpDialog/>
		<SplitPane
			left={
				<Contacts />
			}
			right={
				<Chat />
			} 
		/>
	</>)
}
 */
//END composition vs inheritance




ReactDOM.render(
	<App/>,
	document.getElementById('root')
);