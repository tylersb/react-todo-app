import { useState } from 'react'

export default function Todo({
  todo,
  index,
  completeTodo,
  removeTodo,
  editTodo
}) {
  const [value, setValue] = useState(todo.text)

  const [editing, setEditing] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) return
    editTodo(index, value)
    setEditing(false)
  }

  const text = (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      <div onClick={() => setEditing(true)}>{todo.text}</div>
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  )

  const form = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  )

  return (
    editing ? form : text
    )
}
