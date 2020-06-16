import React from "react";
import * as actions from "../actions";
import {connect} from "react-redux";

const Counter = ({counter, inc, dec, rnd}) => {
	return (
		<div className="jumbotron" style={{backgroundColor: "white"}}>
			<h1>{counter}</h1>
			<button className="btn btn-primary" onClick={dec}>DEC</button>
			<button className="btn btn-primary" onClick={inc}>INC</button>
			<button className="btn btn-primary" onClick={rnd}>RND</button>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		counter: state,
	};
}


export default connect(mapStateToProps, actions)(Counter);