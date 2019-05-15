import React, { useContext } from 'react'
import { TodosContext } from '../context/todo.context'

import Todo from './Todo'

import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'

function TodoList() {
  const todos = useContext(TodosContext)

  return (
    <Paper>
      {todos.length ? (
        <List>
          {todos.map((todo, index) => (
            <div key={todo.id}>
              <Todo {...todo} />
              {index < todos.length - 1 && <Divider />}
              {/* no divider after last todo */}
            </div>
          ))}
        </List>
      ) : null}
    </Paper>
  )
}

export default TodoList
