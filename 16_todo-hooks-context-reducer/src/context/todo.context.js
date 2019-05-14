import React, { createContext } from 'react'
import useTodoState from '../hooks/useTodoState'

const defaultTodos = [
  { id: 1, task: 'mow lawn', completed: false },
  { id: 2, task: 'work on garden', completed: true },
]

export const TodosContext = createContext()

function TodosProvider(props) {
  const todosObj = useTodoState(defaultTodos)

  return (
    // <TodosContext.Provider value={useTodoState(defaultTodos)}>
    <TodosContext.Provider value={{ ...todosObj }}>
      {props.children}
    </TodosContext.Provider>
  )
}

export default TodosProvider
