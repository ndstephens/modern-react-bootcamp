import React, { createContext, useReducer } from 'react'
import todoReducer from '../reducers/todo.reducer'

const defaultTodos = [
  { id: 1, task: 'mow lawn', completed: false },
  { id: 2, task: 'work on garden', completed: true },
]

//? Split into 2 contexts for performance (prevent unnecessary re-renders)
export const TodosContext = createContext()
export const DispatchContext = createContext()

function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos)

  return (
    //* don't wrap in braces again (NO --> {{ todos }} / {{ dispatch }})
    //* would negate performance benefit, makes a new object every time and causes re-renders
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}

export default TodosProvider
