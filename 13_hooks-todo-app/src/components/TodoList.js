import React from 'react'

import Todo from './Todo'

import Paper from '@material-ui/core/Paper'
// import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'

function TodoList({ todos, toggleCompleted, updateTodo, removeTodo }) {
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <Todo
            {...todo}
            toggleCompleted={toggleCompleted}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
            key={todo.id}
          />
        ))}
      </List>
    </Paper>
  )
}

export default TodoList
