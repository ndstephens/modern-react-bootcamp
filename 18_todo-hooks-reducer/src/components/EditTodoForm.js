import React, { useContext } from 'react'
import useInputState from '../hooks/useInputState'
import { DispatchContext } from '../context/todo.context'

import TextField from '@material-ui/core/TextField'

function EditTodoForm({ id, task, toggleIsEditing }) {
  const [updatedTask, setUpdatedTask] = useInputState(task)
  const dispatch = useContext(DispatchContext)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: 'UPDATE', todoId: id, updatedTask })
    toggleIsEditing() // exit from Edit state
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
