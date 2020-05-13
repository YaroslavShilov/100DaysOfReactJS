import React, {useState, useEffect, useReducer} from 'react'
import TodoList from './TodoList'
import {Context} from './context'
import reducer from "./reducer";//импортим редюсер

export default () => {
	/* первым параметром передаём тот редюсер который мы создали
	*  вторым параметром передаём начальное значение редюцера, который мы хотим использовать
	* хук возвращает один параметр в виде массива
	* первое значение массива это стейт
	* а второе значение массива функция диспатч с помощью
	* которой мы можем изменять состояние стейта
	* 
	* перепишем код и уберём локальный стейт 
	* т.к. будем получать его из редюсера
	* 
	* передаём в базоый стейт в редюсере локальные данные или [] если локсторе пуст
	* 
	 */
	const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos') || [])); 
	
	const [todoTitle, setTodoTitle] = useState('');
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(state));
	},[state])
	
	const addTodo = (e) => {
		if(e.key === 'Enter') {
			
			/*
			* передаём в диспатч акшин с нужным типом
			* и нужный результат, 
			* используя который в функционале находящимся в редюсере
			* мы внесём изменения в стейт
			* 
			* */
			dispatch({
				type: 'addTodo',
				payload: todoTitle
			})
			/* переносим этот функционал в редюсер
			setTodos([ //меняем стейт
				...todos,
				{id: Date.now(), title: todoTitle, completed: false}
			])
			*/
			setTodoTitle('')
		}
	}
	
  return (
  	<Context.Provider value={{
  		dispatch
	  }}>
	    <div className="container">
	      <h1>Todo app</h1>
	
	        <div className="input-field">
	          <input 
		          type="text" 
		          value={todoTitle}
		          onChange={e=>setTodoTitle(e.target.value)}
		          onKeyPress={addTodo}
		          id={'addItem'}
	          />
	          <label htmlFor={'addItem'}>Todo name</label>
	        </div>
	
	        <TodoList todos={state} />
	    </div>
	  </Context.Provider>
  );
}