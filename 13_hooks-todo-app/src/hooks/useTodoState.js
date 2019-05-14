//* THIS ISN'T SO MUCH A CUSTOM HOOK AS IT'S AN ABSTRACTION OF FUNCTIONALITY

import useLocalStorageState from './useLocalStorageState'
import uuid from 'uuid/v4'

const useTodoState = () => {
  const [todos, setTodos] = useLocalStorageState('todos')

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
