import { useState } from "react"
import { Button, TextField } from "@mui/material"


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
            
            <TextField
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                type="text"
                id="outlined-basic"
                label="New item"
                variant="outlined"
            />
            <Button
            variant="contained" // kun on MUI button, type on oltava "submit" jotta handleSubmit toimii
            color="success"
            type="submit">
                lisää</Button> 
        </form>

    )
}