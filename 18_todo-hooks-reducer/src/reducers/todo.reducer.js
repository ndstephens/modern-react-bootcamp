import uuid from 'uuid/v4'

export default (todos, action) => {
  switch (action.type) {
    case 'ADD':
      return [...todos, { id: uuid(), task: action.task, completed: false }]
    case 'TOGGLE':
      return todos.map(todo =>
        todo.id === action.todoId
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    case 'UPDATE':
      return todos.map(todo =>
        todo.id === action.todoId ? { ...todo, task: action.updatedTask } : todo
      )
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.todoId)
    default:
      return todos
  }
}
