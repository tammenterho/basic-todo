import { useState } from "react";
import { NewTodoForm } from "./newTodoForm";
import { TodoList } from "./todoList";

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
      
    </>
  );
}
