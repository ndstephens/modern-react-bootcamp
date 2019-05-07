import { useState } from 'react'
import uuid from 'uuid/v4'

const useTodoState = (initialTodos = []) => {
  const [todos, setTodos] = useState(initialTodos)

  const addTodo = newTodoText => {
    setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }])
  }

  const toggleCompleted = todoId => {
    setTodos(
      todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const updateTodo = (todoId, updatedTask) => {
    setTodos(
      todos.map(todo =>
        todo.id === todoId ? { ...todo, task: updatedTask } : todo
      )
    )
  }

  const removeTodo = todoId => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  return {
    todos,
    addTodo,
    toggleCompleted,
    updateTodo,
    removeTodo,
  }
}

export default useTodoState
