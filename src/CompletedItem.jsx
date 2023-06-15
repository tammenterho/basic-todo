import { Button } from "@mui/material";
import './../src/styles.css'



export function CompletedItem({id, title, handleDelete }) {


    return (
        <>
        
        <li className="doneItem"
        key={id}>
            <span className="item-title">{title}</span>
            <Button
                variant="outlined"
                color="error"
                className="btn-delete"
                onClick={() => handleDelete(id)} // onClick={handleDelete(id)} jos halutaan funktiota käyttää niin nuolifunktio on oltava
            >Delete</Button>
        </li>
        </>
    )
}