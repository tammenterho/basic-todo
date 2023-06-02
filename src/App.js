import { useState } from "react";

export default function App() {

  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

function handleSubmit(e) {

  setTodos(currentTodos => {
    return [
      ...currentTodos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]
  })
}

  return (
    <>
    <form 
    onSubmit={handleSubmit}
    className="esine-form">
      <label>
        Uusi esine
      </label>
      <input
      onChange={e => setNewItem(e.target.value)}
      value={newItem}
      type="text"
      id="esine"
      />
      <button>lisää</button>
      <button>anna</button>
    </form>
    <h1>Lista</h1>
      <ul>
        <li>
          esine1
        </li>
      </ul>
      </>
  );
}
