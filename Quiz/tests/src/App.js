import React, {Component} from 'react'
import './App.scss'
import {connect} from "react-redux";
import {add, addNumber, asyncAdd, sub, subNumber} from "./redux/actions/actions";
import Counter from "./Counter";


class App extends Component {

  render() {
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
        </div>
	      <div className="Actions">
	        <button onClick={() => this.props.onAddNum(10)}>Добавить 10</button>
          <button onClick={() => this.props.onSubNum(10)}>Вычесть 10</button>
        </div>

	      <div className="Actions">
		      <button onClick={() => this.props.onAsyncAdd(100)}>
			      Асинхронно добавить 100
		      </button>
	      </div>
	      
	      <Counter/>
      </div>
    ) 
  }
}


function mapStateToProps(state) {
	return {
		counter: state.counter1.counter,
	}
}

function madDispatchToProps(dispatch) {
	return {
		onAdd: () => dispatch(add()),
		onSub: () => dispatch(sub()),
		onAddNum: (value) => dispatch(addNumber(value)),
		onSubNum: (value) => dispatch(subNumber(value)),
		onAsyncAdd: value => dispatch(asyncAdd(value))
	}
}

export default connect(mapStateToProps, madDispatchToProps)(App)
