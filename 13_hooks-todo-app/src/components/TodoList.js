import React from 'react'

import Todo from './Todo'

import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'

function TodoList({ todos, toggleCompleted, updateTodo, removeTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo, index) => (
          <div key={todo.id}>
            <Todo
              {...todo}
              toggleCompleted={toggleCompleted}
              updateTodo={updateTodo}
              removeTodo={removeTodo}
            />
            {index < todos.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </Paper>
  )
}

export default TodoList
