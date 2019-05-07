import React from 'react'
import useInputState from '../hooks/useInputState'

import TextField from '@material-ui/core/TextField'

function EditTodoForm({ id, task, toggleIsEditing, updateTodo }) {
  const [updatedTask, setUpdatedTask] = useInputState(task)

  const handleSubmit = e => {
    e.preventDefault()
    updateTodo(id, updatedTask) // handle in TodoApp
    toggleIsEditing() // exit from editing state
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', margin: '0 1rem' }}>
      <TextField
        autoFocus
        value={updatedTask}
        onChange={setUpdatedTask}
        margin="normal"
        fullWidth
      />
    </form>
  )
}

export default EditTodoForm
