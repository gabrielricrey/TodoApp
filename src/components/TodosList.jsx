import { useState, useContext } from "react"
import { TodosContext } from "../context/TodosContext"
import { Link } from "react-router-dom"
import CreateTodo from "../components/CreateTodo";
import Todo from "./Todo"

let TodosList = () => {

    let { todos, setTodos } = useContext(TodosContext)
    let [showCreate, setShowCreate] = useState(false);


    return (
        <div className="todo-list">
            {
                showCreate && <CreateTodo setShowCreate={setShowCreate}/>
            }
            <button className="open-create-btn" onClick={() => setShowCreate(true)}>+</button>
            <h2>Todos</h2>
            <ul>
                {
                    todos.map((todo, i) => <Todo todo={todo} index={i} setShowCreate={setShowCreate} key={i} />)
                }
            </ul>
        </div>
    )
}

export default TodosList