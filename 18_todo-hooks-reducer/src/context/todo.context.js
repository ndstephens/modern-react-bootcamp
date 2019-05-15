import React, { createContext } from 'react'
import useLocalStorageReducer from '../hooks/useLocalStorageReducer'
import todoReducer from '../reducers/todo.reducer'

const defaultTodos = [{ id: 1, task: 'create some todos', completed: false }]

//? Split into 2 contexts for performance (prevent unnecessary re-renders)
export const TodosContext = createContext()
export const DispatchContext = createContext()

function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    'todos',
    todoReducer,
    defaultTodos
  )

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
