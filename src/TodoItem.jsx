import { Button } from "@mui/material"
import { Checkbox } from "@mui/material"

export function TodoItem({ completed, id, title, toggleTodo, handleDelete }) {

    // funktiot voi myös passata mutta pitää muistaa lisätä ne toisessa päässä myös

    return (
        <li key={id}>
            <label>
                <Checkbox type="checkbox"
                    checked={completed}
                onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
                <Button variant="outlined" color="error"
                    className="btn-delete"
                onClick={() => handleDelete(id)} // onClick={handleDelete(id)} jos halutaan funktiota käyttää niin nuolifunktio on oltava
                >Delete</Button>
            </label>
        </li>
    )
}