import React, { useState } from 'react'
import './TodoList.css'

import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

const TodoList = props => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  )

  const addTodo = todo => {
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const toggleCompleted = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    setTodos(updatedTodos)
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }

  const updateTodo = (id, updatedName) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, name: updatedName }
      }
      return todo
    })
    setTodos(updatedTodos)
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }

  const deleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }

  const displayTodos = todos.map(todo => (
    <Todo
      key={todo.id}
      todo={todo}
      toggleCompleted={toggleCompleted}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
    />
  ))

  return (
    <div>
      <h1>Todo List!</h1>
      <ul>{displayTodos}</ul>
      <NewTodoForm addTodo={addTodo} />
    </div>
  )
}

export default TodoList
