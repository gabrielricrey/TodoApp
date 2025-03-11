import { useState, useContext } from "react"
import { TodosContext } from "../context/TodosContext"
import { Link } from "react-router-dom"
import CreateTodo from "../components/CreateTodo";
import Todo from "./Todo"

let TodosList = () => {

    let { todos, setTodos } = useContext(TodosContext)
    let [showCreate, setShowCreate] = useState(false);
    let [show, setShow] = useState(true);


    return (
        <>
                <h2 id="header">Todos</h2>
                <button id="create-btn" onClick={() => { setShowCreate(true); setShow(false) }}>+</button>



            {
                showCreate && <CreateTodo setShowCreate={setShowCreate} setShow={setShow} />
            }

            {
                show &&
                <>
                    <ul className="todo-list">
                        {
                            todos.map((todo, i) => <Todo todo={todo} index={i} setShowCreate={setShowCreate} key={i} />)
                        }
                    </ul>
                </>
            }
        </>
    )
}

export default TodosList