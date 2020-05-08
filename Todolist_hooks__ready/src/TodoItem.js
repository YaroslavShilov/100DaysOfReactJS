import React from 'react'
import {useContext} from 'react';
import {Context} from './context';

export default ({title, id, completed, setChecked}) => {
	const {dispatch} = useContext(Context)
	const cls = ['todo']
	completed && cls.push('completed')
  return (
    <li className={cls.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch({type: 'toggleTodo', payload: id})}
        />
        <span>{title}</span>
        <i
          className="material-icons red-text"
          onClick={() => dispatch({type: 'removeTodo', payload: id})}
        >
          delete
        </i>
      </label>
    </li>
  )
}