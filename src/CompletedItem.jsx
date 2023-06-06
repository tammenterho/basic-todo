import { Button } from "@mui/material";

export function CompletedItem({id, title, handleDelete}) {

    return (
        <li key={id}>
            {title}
            <Button
                variant="outlined"
                color="error"
                className="btn-delete"
                onClick={() => handleDelete(id)} // onClick={handleDelete(id)} jos halutaan funktiota käyttää niin nuolifunktio on oltava
            >Delete</Button>
        </li>
    )
}