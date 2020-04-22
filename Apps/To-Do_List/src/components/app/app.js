import React, {Component} from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import './app.css'
import ItemAddForm from "../item-add-form";

export default class App extends Component {
	maxId = 0;
	
	state = {
		todoData: [
			this.createTodoItem('Drink Coffee'),
			this.createTodoItem('Learn React'),
			this.createTodoItem('Learn English'),
		],
		achieve: {
			done: 0,
			all: 0,
		}
	};
	
	createTodoItem(label) {
		return {
			label: label,
			important: false,
			done: false,
			id: this.maxId++,
		};
	}
	
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
	
	addItem = (label) => {
		const newItem = this.createTodoItem(label);
		
		this.setState(({todoData}) => {
			const copyTodoData = [...todoData, newItem];
			return {todoData: copyTodoData};
		});
	};
	
	toggleProperty(arr, id, propName) {
		const idx = arr.findIndex((el) => el.id === id);

		const oldItem = arr[idx];
		const newItem = {...oldItem, [propName]: !oldItem[propName]};

		return [
			...arr.slice(0, idx),
			newItem,
			...arr.slice(idx+1),
		];
	}
	
	onToggleImportant = (id) => {
		this.setState(({todoData}) => {
			return {todoData: this.toggleProperty( todoData, id, 'important')};
		});
	};

	onToggleDone = (id) => {
		this.setState(({todoData}) => {
			return {todoData: this.toggleProperty(todoData, id, 'done')};
		});
	};
	
	render () {
		const {todoData} = this.state;
		const doneCount = todoData.filter((el) => el.done).length;
		const todoCount = todoData.length - doneCount;
		return (
			<div className={"todo-app"}>
				
				<AppHeader toDo={todoCount} done={doneCount}/>
				
				<div className={"top-panel d-flex"}>
					<SearchPanel/>
					<ItemStatusFilter />
				</div>
				
				<TodoList 
					todos={todoData} 
					onDeleted={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone}
				/>
				<ItemAddForm
					onItemAdded={this.addItem}
				/>
			</div>
		)
	}
	
	
}