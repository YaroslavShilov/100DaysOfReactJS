import React, {useEffect, useState} from 'react';
import {TodoForm} from "../components/TodoForm";
import {TodoList} from "../components/TodoList";
import {ITodo} from "../interfaces";

declare var confirm: (question: string) => boolean

export const TodosPages: React.FC= () => {
	const [todos, setTodos] = useState<ITodo[]>([])

	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
		setTodos(saved);
	}, [])

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos])

	const onAddHandler = (title: string): void => {
		if(title.trim() === '') return;
		const newTodo: ITodo = {
			title: title,
			id: Date.now(),
			completed: false
		}
		setTodos(prev => [newTodo, ...prev])
	}

	const toggleHandler = (id: number): void => {
		setTodos(
			todos.map(todo => {
				if(todo.id === id) todo.completed = !todo.completed
				return todo;
			})
		)
	}

	const removeHandler = (id: number): void => {
		const shouldRemove = confirm('are you going to delete the task?');
		if(shouldRemove) setTodos(prev => prev.filter(todo => todo.id !== id))

	}

	return (
		<div>
			<TodoForm onAdd={onAddHandler}/>
			<TodoList
				todos={todos}
				onRemove={removeHandler}
				onToggle={toggleHandler}
			/>
		</div>
	);
}
