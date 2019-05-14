import React from 'react'
import useTodoState from '../hooks/useTodoState'

import TodosProvider from '../context/todo.context'

import TodoList from './TodoList'
import TodoForm from './TodoForm'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'

function TodoApp(props) {
  const {
    todos,
    addTodo,
    toggleCompleted,
    updateTodo,
    removeTodo,
  } = useTodoState()

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
          <TodosProvider>
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
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp
