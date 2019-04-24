import React, { useState } from 'react'
import uuid from 'uuid/v4'

import './NewTodoForm.css'

const NewTodoForm = ({ addTodo }) => {
  const [taskName, setTaskName] = useState('')

  const handleChange = e => {
    setTaskName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    addTodo({ id: uuid(), name: taskName, completed: false })
    setTaskName('')
  }

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task">New Todo</label>
      <input
        autoFocus
        value={taskName}
        onChange={handleChange}
        type="text"
        placeholder="New Todo"
        id="task"
      />
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodoForm
