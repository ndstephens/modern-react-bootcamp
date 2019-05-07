import React, { useState } from 'react'
import uuid from 'uuid/v4'

import TodoList from './TodoList'
import TodoForm from './TodoForm'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'

function TodoApp(props) {
  const initialTodos = [
    { id: 1, task: 'Clean fishtank', completed: false },
    { id: 2, task: 'Wash car', completed: true },
    { id: 3, task: 'Grow beard', completed: false },
  ]

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

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={6} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            toggleCompleted={toggleCompleted}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp
