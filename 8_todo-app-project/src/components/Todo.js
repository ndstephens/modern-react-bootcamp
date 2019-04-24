import React, { useState } from 'react'
import './Todo.css'

const Todo = ({ todo, deleteTodo, toggleCompleted, updateTodo }) => {
  const [editMode, setEditMode] = useState(false)
  const [taskName, setTaskName] = useState(todo.name)

  const completed = todo.completed ? 'completed' : ''

  const handleCompleted = () => {
    toggleCompleted(todo.id)
  }

  const handleEditMode = () => {
    setEditMode(!editMode)
  }

  const handleUpdateSubmit = e => {
    e.preventDefault()
    updateTodo(todo.id, taskName)
    handleEditMode()
  }

  const handleNameChange = e => {
    setTaskName(e.target.value)
  }

  const handleDelete = () => {
    deleteTodo(todo.id)
  }

  return (
    <>
      {!editMode && (
        <div>
          <p onClick={handleCompleted} className={`${completed}`}>
            {todo.name}
          </p>
          <i onClick={handleEditMode}>edit</i>
          <i onClick={handleDelete}>X</i>
        </div>
      )}
      {editMode && (
        <div>
          <form onSubmit={handleUpdateSubmit}>
            <input
              autoFocus
              type="text"
              value={taskName}
              onChange={handleNameChange}
            />
            <button>Save</button>
          </form>
        </div>
      )}
    </>
  )
}

export default Todo
