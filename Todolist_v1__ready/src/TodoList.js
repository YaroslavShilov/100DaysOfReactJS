import React from 'react'
import TodoItem from './TodoItem'

export default ({todos, setChecked}) => {
  return (
    <ul>
      {todos.map(item => <TodoItem key={item.id} {...item} />)}
    </ul>
  )
}