import React from 'react';
import Auxiliary from "../hoc/Auxiliary";
import Counter2 from "../Counter2/Counter2";

export default class Counter extends React.Component {
	state = {
		counter: 0
	}
	
	addCounter = () => {
		this.setState((prevState) => {
			return {
				counter: prevState.counter + 1,
			}
		})
	}
	
	render() {
		return (
			<Auxiliary>
				<h2>Counter {this.state.counter}</h2>
				<Counter2/>
				<button style={{margin: '0 2px 0px'}} onClick={this.addCounter}>+</button>
				<button style={{margin: '0 2px 0px'}} onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
				<hr/>
			</Auxiliary>
		)
	}
}