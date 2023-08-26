import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn about React' },
    { text: 'Meet friend for lunch' },
    { text: 'Build really cool todo app' }
  ])

  return (
    <>
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo} />
          ))}
        </div>
      </div>
    </>
  )
}
