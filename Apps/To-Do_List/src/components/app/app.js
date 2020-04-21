import React, {Component} from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import './app.css'

export default class App extends Component {
	state = {
		todoData: [
			{label: 'Drink Coffee', important: false, id: 1},
			{label: 'Learn React', important: true, id: 2},
			{label: 'Learn English', important: false, id: 3},
		],
	};
	
	deleteItem = (id) => {
		this.setState(({todoData}) => {
			
			const idx = todoData.findIndex((el) => el.id === id);
			
			const copyTodoData = [...todoData];
			copyTodoData.splice(idx, 1);
			
			return {
				todoData: copyTodoData,
			}
			
		});
	};
	
	render () {
		return (
			<div className={"todo-app"}>
				
				<AppHeader toDo={1} done={3}/>
				
				<div className={"top-panel d-flex"}>
					<SearchPanel/>
					<ItemStatusFilter />
				</div>
				
				<TodoList 
					todos={this.state.todoData} 
					onDeleted={(id) => this.deleteItem(id)}
				/>
			</div>
		)
	}
	
	
}