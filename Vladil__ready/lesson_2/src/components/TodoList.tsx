import React from 'react';
import { ITodo } from '../interfaces';

type TodoListProps = {
	todos: ITodo[],
	onToggle(id: number): void,
	onRemove: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({
	todos,
	onRemove,
	onToggle
}) => {

	if(todos.length === 0) {
		return <p className={"center"}> Don't have tasks</p>
	}

	const removeHandler = (e: React.MouseEvent, todoId: number) => {
		e.preventDefault()
		onRemove(todoId)
	}

	return (
		<ul>
			{
				todos.map((todo: ITodo) => {
					const classes = ['todo']
					if(todo.completed) {
						classes.push('completed')
					}
					return (
						<li key={todo.id} className={classes.join(' ')}>
							<label>
								<input
									type="checkbox"
									checked={todo.completed}
									onChange={() => onToggle(todo.id)}
								/>
								<span>{todo.title}</span>
								<i
									className={'material-icons red-text'}
									onClick={(e) => removeHandler(e,todo.id)}
								>delete</i>
							</label>
						</li>
					)
				})
			}
		</ul>
	);
}
