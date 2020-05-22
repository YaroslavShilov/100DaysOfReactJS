import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add2, addNumber2, sub2, subNumber2} from "./redux/actions/actions";

class Counter extends Component {
	render() {
		return (
			<div style={{padding: 20, border: '1px solid #ccc'}}>
				<h1>Counter {this.props.counter}</h1>
				<hr/>
				<div>
					<button onClick={this.props.onAdd}>Add</button>
					<button onClick={this.props.onSub}>Sub</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		counter: state.counter2.counter,
	}
}

function madDispatchToProps(dispatch) {
	return {
		onAdd: () => dispatch(add2()),
		onSub: () => dispatch(sub2()),
		onAddNum: (value) => dispatch(addNumber2(value)),
		onSubNum: (value) => dispatch(subNumber2(value)),
	}
}

export default connect(mapStateToProps, madDispatchToProps)(Counter);