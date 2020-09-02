import React, {useState} from 'react';
import {Navbar} from "./components/Navbar";
import {TodoForm} from "./components/TodoForm";
import {TodoList} from "./components/TodoList";
import { ITodo } from './interfaces';

const App: React.FC = () => {
	const [todos, setTodos] = useState<ITodo[]>([])

	const onAddHandler = (title: string): void => {
		const newTodo: ITodo = {
			title: title,
			id: Date.now(),
			completed: false
		}
		setTodos(prev => [newTodo, ...prev])
	}

	const toggleHandler = (id: number): void => {

	}

	const removeHandler = (id: number): void => {

	}

  return (
  	<>
  	  <Navbar/>
  	  <div className="container">
		    <TodoForm onAdd={onAddHandler}/>
		    <TodoList todos={todos}/>
	    </div>
  	</>
  );
}

export default App;
