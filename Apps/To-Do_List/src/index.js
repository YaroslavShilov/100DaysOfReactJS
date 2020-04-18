import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/app-header/app-header";
import SearchPanel from "./components/search-panel/search-panel";
import TodoList from "./components/todo-list/todo-list";
import ItemStatusFilter from './components/item-status-filter/item-status-filter';



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



ReactDOM.render(
	<App/>, document.getElementById('root')
);