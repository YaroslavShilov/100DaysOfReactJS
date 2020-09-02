import React from 'react';
import { ITodo } from '../interfaces';

type TodoListProps = {
	todos: ITodo[],
	onToggle(id: number): void,
	onRemove: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({todos}) => {
	const onChangeHandler = (): void => {

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
									onChange={onChangeHandler}
								/>
								<span>{todo.title}</span>
								<i className={'material-icons red-text'}>delete</i>
							</label>
						</li>
					)
				})
			}


		</ul>
	);
}
