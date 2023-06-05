import { useState } from "react";
import { NewTodoForm } from "./newTodoForm";

export default function App() {

  
  const [todos, setTodos] = useState([])

  function addTodo(title) {
      setTodos(currentTodos => {
          return [
              ...currentTodos,
              { id: crypto.randomUUID(), title, completed: false },
          ]
      })
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
    <NewTodoForm addTodo={addTodo}/>
      <h1>List</h1>
      <ul>
        {todos.length === 0 && noTodos()} {/*tähän voisi myös suoraan laittaa {todos.length === 0 && "no todos" */}
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
