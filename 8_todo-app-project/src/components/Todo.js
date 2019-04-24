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
        <div className="Todo">
          <li onClick={handleCompleted} className={`Todo__task ${completed}`}>
            {todo.name}
          </li>
          <div className="Todo__buttons">
            <button onClick={handleEditMode}>
              <i className="fas fa-pen" />
            </button>
            <button onClick={handleDelete}>
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      )}
      {editMode && (
        <div className="Todo">
          <form className="Todo__edit-form" onSubmit={handleUpdateTodo}>
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
