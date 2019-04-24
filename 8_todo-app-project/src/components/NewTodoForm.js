import React, { useState } from 'react'

const NewTodoForm = ({ addTodo }) => {
  const [taskName, setTaskName] = useState('')

  const handleChange = e => {
    setTaskName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(taskName)
    setTaskName('')
  }

  return (
    <div className="NewTodoForm">
      <p className="NewTodoForm__title">New Todo</p>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          value={taskName}
          onChange={handleChange}
          type="text"
          placeholder="New Todo"
        />
        <button>Add Todo</button>
      </form>
    </div>
  )
}

export default NewTodoForm
