import { useEffect, useState } from "react";
import { NewTodoForm } from "./newTodoForm";
import { TodoList } from "./todoList";
import './../src/styles.css'
import { CompletedList } from "./completedList";
import './../src/styles.css'





export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
  })
  // hakee ITEMSit localstoragesta
  // ei voi renderöidä hookseja ehdollisesti
  // hooks aina filen ylös

  const [dones, setDones] = useState([])

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos))

    const updatedTodos = todos.filter(todo => !todo.completed);
    setTodos(updatedTodos);

    const completedTodos = todos.filter(todo => todo.completed)
    if (completedTodos.length > 0) {
      setDones(prevDones => [...prevDones, ...completedTodos])
    }
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
    setDones(currentDones => {
      return currentDones.filter(done => done.id !== id)
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }


  return (
    
    <>
      <h1 className="header">Simple Todo List</h1>
      <NewTodoForm onSubmit={addTodo} />
      <div className="lists">
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        handleDelete={handleDelete}
      />
      <CompletedList
      dones={dones}
      handleDelete={handleDelete}/>
      </div>
    </>
   
  );
}
