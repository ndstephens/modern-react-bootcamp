import React, { useState } from 'react'
import uuid from 'uuid/v4'

import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

const TodoList = props => {
  const [todos, setTodos] = useState([])

  const addTodo = task => {
    const todo = { id: uuid(), name: task, completed: false }
    setTodos([todo, ...todos])
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
  }

  const deleteTodo = id => {
    const filteredTodos = todos.filter(todo => todo.id !== id)
    setTodos(filteredTodos)
  }

  return (
    <>
      <h1>Todo List</h1>
      <div>
        {todos.map(todo => (
          <Todo
            todo={todo}
            deleteTodo={deleteTodo}
            toggleCompleted={toggleCompleted}
            updateTodo={updateTodo}
            key={todo.id}
          />
        ))}
      </div>
      <NewTodoForm addTodo={addTodo} />
    </>
  )
}

export default TodoList
