import React from 'react'
import useInputState from '../hooks/useInputState'

import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

function TodoForm({ addTodo }) {
  const [task, updateTask, resetTask] = useInputState('')

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(task) // handle in TodoApp
    resetTask()
  }

  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          autoFocus
          value={task}
          onChange={updateTask}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  )
}

export default TodoForm
