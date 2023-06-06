import { useEffect, useState } from "react";
import { NewTodoForm } from "./newTodoForm";
import { TodoList } from "./todoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
  })
  // hakee ITEMSit localstoragesta
  // ei voi renderöidä hookseja ehdollisesti
  // hooks aina filen ylös

  const[done, setDone] = useState([])

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos))
 }, [todos]) // aina kun todos muuttuu, useEffect ajetaan

  function addTodo(title) {
      setTodos(currentTodos => {
          return [
              ...currentTodos,
              { id: crypto.randomUUID(), title, completed: false },
          ]
      })
  }

  function handleDelete(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
 
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
  
  return (
    <>
    <NewTodoForm onSubmit={addTodo}/>
    <TodoList 
    todos={todos}
    toggleTodo={toggleTodo}
    handleDelete={handleDelete}
    />
    <h1>Completed</h1>
    </>
  );
}
