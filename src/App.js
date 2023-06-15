import { useEffect, useState } from "react";
import { NewTodoForm } from "./newTodoForm";
import { TodoList } from "./todoList";
import './../src/styles.css'
import { CompletedList } from "./completedList";
import Alert from '@mui/material/Alert';






export default function App() {
  const [deletedVisible, setDeletedVisible] = useState(false)
  const [successVisible, setSuccessVisible] = useState(false)
  const [emptyFieldAlertVisible, setEmptyFieldAlertVisible] = useState(false)
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
    if (title === "") {
      setEmptyFieldAlertVisible(true)
      setTimeout(() => {
        setEmptyFieldAlertVisible(false)
      }, 5000)
    } else {
      setTodos(currentTodos => {
        return [
          ...currentTodos,
          { id: crypto.randomUUID(), title, completed: false },
        ]
      })
      setSuccessVisible(true)

      setTimeout(() => {
        setSuccessVisible(false)
      }, 5000)
    }
  }

  function handleDelete(id) {
    setDones(currentDones => {
      return currentDones.filter(done => done.id !== id)
    })
    setDeletedVisible(true)

    setTimeout(() => {
      setDeletedVisible(false)
    }, 5000)
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
      {emptyFieldAlertVisible && (
        <Alert severity="warning">
          Input cannot be empty!
        </Alert>
      )}
      {successVisible && (
        <Alert severity="success">
          New todo added succesfully!
        </Alert>
      )}
      {deletedVisible && (
        <Alert severity="success">
          empty field
        </Alert>
      )}
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
          handleDelete={handleDelete} />
      </div>
    </>

  );
}
