import React, { createContext, useReducer } from 'react'
// import useTodoState from '../hooks/useTodoState'
import todoReducer from '../reducers/todo.reducer'

const defaultTodos = [
  { id: 1, task: 'mow lawn', completed: false },
  { id: 2, task: 'work on garden', completed: true },
]

export const TodosContext = createContext()

function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos)

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  )
}

export default TodosProvider
