import { useState } from 'react'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'
function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <CreateTodo />
      <Todos todos={todos} />
    </>
  )
}

export default App
