import { useState } from "react"


export function NewTodoForm(props) {

    const [newItem, setNewItem] = useState("")
    

    function handleSubmit(e) {
        e.preventDefault()

        props.onSubmit(newItem)

        setNewItem("")
    }

    return (
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

    )
}