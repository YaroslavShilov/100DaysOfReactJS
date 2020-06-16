import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {createStore} from 'redux';
import reducer from "./reducer";
import App from "./components/App";
import {Provider} from "react-redux";

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)

