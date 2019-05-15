import React, { useContext } from 'react'
import useInputState from '../hooks/useInputState'
import { DispatchContext } from '../context/todo.context'

import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

function TodoForm() {
  const [task, updateTask, resetTask] = useInputState('')
  const dispatch = useContext(DispatchContext)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: 'ADD', task: task })
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
