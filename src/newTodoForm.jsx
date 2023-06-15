import { useState } from "react"
import { Button, TextField } from "@mui/material"
import './../src/styles.css'


export function NewTodoForm(props) {

    const [newItem, setNewItem] = useState("")



    function handleSubmit(e) {
        e.preventDefault()

        props.onSubmit(newItem)


        setNewItem("")
    }

    return (
        <>

            <form
                onSubmit={handleSubmit}
                className="item-form">


                <TextField
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type="text"
                    id="outlined-basic"
                    label="New item"
                    variant="outlined"
                />
                <Button
                    className="add-btn"
                    variant="contained" // kun on MUI button, type on oltava "submit" jotta handleSubmit toimii
                    color="success"
                    type="submit">
                    Add</Button>
            </form>
        </>
    )
}