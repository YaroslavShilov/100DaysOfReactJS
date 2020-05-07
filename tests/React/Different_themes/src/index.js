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

class LoginControl extends React.Component {
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
	
}

//END conditional rendering