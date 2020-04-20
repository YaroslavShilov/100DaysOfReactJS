import React from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import './app.css'

const App = () => {
	const todoData = [
		{label: 'Drink Coffee', important: false, id: 1},
		{label: 'Learn React', important: true, id: 2},
		{label: 'Learn English', important: false, id: 3},
	];

	return (
		<>
		<AppHeader/>
		<SearchPanel/>
		<ItemStatusFilter />
		<TodoList todos={todoData}/>
		</>
	)
};
export default App;