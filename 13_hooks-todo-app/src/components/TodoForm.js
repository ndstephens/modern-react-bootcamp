import React from 'react'

import useInputState from '../hooks/useInputState'

import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

function TodoForm({ addTodo }) {
  const [task, updateTask, resetTask] = useInputState('')

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(task)
    resetTask()
  }

  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <TextField value={task} onChange={updateTask} />
      </form>
    </Paper>
  )
}

export default TodoForm
