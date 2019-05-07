import React from 'react'
import useToggleState from '../hooks/useToggleState'

import EditTodoForm from './EditTodoForm'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

function Todo({
  id,
  task,
  completed,
  toggleCompleted,
  updateTodo,
  removeTodo,
}) {
  const [isEditing, toggleIsEditing] = useToggleState(false)

  const handleCompleted = () => {
    toggleCompleted(id)
  }

  const handleToggleEditing = () => {
    toggleIsEditing()
  }

  const handleDelete = () => {
    removeTodo(id)
  }

  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodoForm
          id={id}
          task={task}
          toggleIsEditing={toggleIsEditing}
          updateTodo={updateTodo}
        />
      ) : (
        <>
          {/* CHECKBOX -- COMPLETED */}
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={handleCompleted}
          />

          {/* TASK TEXT */}
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            {task}
          </ListItemText>

          <ListItemSecondaryAction>
            {/* EDIT BUTTON */}
            <IconButton onClick={handleToggleEditing} aria-label="Edit">
              <EditIcon />
            </IconButton>
            {/* DELETE BUTTON */}
            <IconButton onClick={handleDelete} aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  )
}

export default Todo
