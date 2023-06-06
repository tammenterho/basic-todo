import { TodoItem } from "./TodoItem"
import './../src/styles.css'


export function TodoList({ todos, toggleTodo, handleDelete }) {



    function noTodos() {
        return <p>no todos</p>
    }


    return (
        <div className="todoDiv">
            <h1>Todo</h1>
            <ul className="list">
                {todos.length === 0 && noTodos()} {/*tähän voisi myös suoraan laittaa {todos.length === 0 && "no todos" */}
                {todos.map(todo => {
                    return (
                        <TodoItem 
                        id={todo.id} 
                        completed={todo.completed} 
                        title={todo.title}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        />
                        // tai pelkästään {...todo} key={todo.id}
                    )
                })}
            </ul>
        </div>
    )
}