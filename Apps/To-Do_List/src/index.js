import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
	
	const items = ["Learn React", "Learn English"];
	return (
		<ul>
			<li>{items[0]}</li>
			<li>{items[1]}</li>
		</ul>
	)
};

const AppHeader = () => {
	return <h1>My Todo List</h1>
};

const SearchPanel = () => {
	return <input type="text" placeholder="search" />

};

const App = () => {
	
	const loginBox = <span>Login in please</span>;
	return (
		<>
		{loginBox}
		<AppHeader/>
		<SearchPanel/>
		<TodoList/>
		</>
	)
};

ReactDOM.render(
	<App/>, document.getElementById('root')
);