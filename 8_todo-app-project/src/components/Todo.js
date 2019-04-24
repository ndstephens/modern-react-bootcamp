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
    setEditMode(prevEditMode => !prevEditMode)
  }

  const handleUpdateTodo = e => {
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
          <button onClick={handleEditMode}>edit</button>
          <button onClick={handleDelete}>X</button>
        </div>
      )}
      {editMode && (
        <div>
          <form onSubmit={handleUpdateTodo}>
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
