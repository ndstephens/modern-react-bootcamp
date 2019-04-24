import React, { useState } from 'react'
import uuid from 'uuid/v4'
import './TodoList.css'

import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

const TodoList = props => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  )

  const addTodo = task => {
    const todo = { id: uuid(), name: task, completed: false }
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const toggleCompleted = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
        return todo
      }
      return todo
    })
    setTodos(updatedTodos)
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }

  const updateTodo = (id, name) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.name = name
        return todo
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
      todo={todo}
      deleteTodo={deleteTodo}
      toggleCompleted={toggleCompleted}
      updateTodo={updateTodo}
      key={todo.id}
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
