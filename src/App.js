import { useState } from "react";

export default function App() {

  const [newItem, setNewItem] = useState("Moi")

  return (
    <>
    <form className="esine-form">
      <label>
        Uusi esine
      </label>
      <input
      value={newItem}
      type="text"
      id="esine"
      />
      <button>lisää</button>
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
