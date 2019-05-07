import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v4'

import TodoList from './TodoList'
import TodoForm from './TodoForm'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'

function TodoApp(props) {
  const initialState = JSON.parse(localStorage.getItem('todos')) || []

  const [todos, setTodos] = useState(initialState)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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
          {/* NEW TODO INPUT */}
          <TodoForm addTodo={addTodo} />
          {/* TODO LIST */}
          {todos.length ? (
            <TodoList
              todos={todos}
              toggleCompleted={toggleCompleted}
              updateTodo={updateTodo}
              removeTodo={removeTodo}
            />
          ) : null}
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp
