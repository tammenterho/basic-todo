import { useState } from "react";

export default function App() {

  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  
  function handleSubmit(e) {
    e.preventDefault()
    
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    })
    
    setNewItem("")
  }
  console.log(todos)
  
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }
  
  function handleDelete(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  function noTodos () {
    return <p>no todos</p>
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="esine-form">
        <label>
          New Item
        </label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="esine"
        />
        <button>lisää</button>
      </form>
      <h1>List</h1>
      <ul>
        {todos.length === 0 && noTodos()}
        {todos.map(todo => {
          return (
          <li key={todo.id}>
            <label>
              <input type="checkbox" 
              checked={todo.completed}
              onChange={e => toggleTodo(todo.id, e.target.checked)}/>
            {todo.title}
            <button 
            className="btn-delete" 
            onClick={() => handleDelete(todo.id)} // onClick={handleDelete(todo.id)} jos halutaan funktiota käyttää niin nuolifunktio on oltava
            >Delete</button>
            </label>
          </li>
        )
        })}
      </ul>
    </>
  );
}
