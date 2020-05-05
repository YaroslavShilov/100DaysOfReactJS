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

//END Handing-events