import { CompletedItem } from "./CompletedItem";
import './../src/styles.css'

export function CompletedList({handleDelete, dones}) {
    
    return (
        <div className="doneDiv">
            <h1>Completed</h1>
            <ul className="list">
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
        </div>
    )
}