import { Button } from "@mui/material";
import { CompletedItem } from "./CompletedItem";

export function CompletedList({handleDelete, dones}) {
    
    return (
        <>
            <h1>Completed</h1>
            <ul>
                {dones.length === 0 && "complete a task!"}
                {dones.map(done => {
                    return (
                        <CompletedItem 
                        id={done.id} 
                        completed={done.completed} 
                        title={done.title}
                        key={done.id}
                        handleDelete={handleDelete}
                        />
                    )
                })}
            </ul>
        </>
    )
}