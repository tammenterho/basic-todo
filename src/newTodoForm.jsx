import { useState } from "react"
import { Button, TextField } from "@mui/material"
import Alert from '@mui/material/Alert';
import './../src/styles.css'


export function NewTodoForm(props) {

    const [newItem, setNewItem] = useState("")
    const [successVisible, setSuccessVisible] = useState(false)
    

    function handleSubmit(e) {
        e.preventDefault()

        props.onSubmit(newItem)
        setSuccessVisible(true)

        setTimeout(() => {
            setSuccessVisible(false)
        }, 5000)

        setNewItem("")
    }

    return (
        <>
        {successVisible && (
            <Alert severity="success">
                New todo added succesfully!
            </Alert>
        )}
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