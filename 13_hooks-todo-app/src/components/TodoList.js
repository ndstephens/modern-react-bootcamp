import React from 'react'

import Todo from './Todo'

import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'

function TodoList({ todos }) {
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <>
            <Todo {...todo} key={todo.id} />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  )
}

export default TodoList
