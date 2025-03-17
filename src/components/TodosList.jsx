import { useState, useContext } from "react"
import { TodosContext } from "../context/TodosContext"
import { Link } from "react-router-dom"
import CreateTodo from "../components/CreateTodo";
import Todo from "./Todo"

let TodosList = () => {

    let { todos, setTodos } = useContext(TodosContext)
    let [showCreate, setShowCreate] = useState(false);
    // let [show, setShow] = useState(true);


    return (
        <>
            <div className="top">
                <h2 id="header">Todos</h2>
            </div>
            <div className="bottom">
                <button id="create-btn" onClick={() => { setShowCreate(true) }}>+</button>
            </div>



            {
                showCreate && <CreateTodo setShowCreate={setShowCreate} />
            }

          
                    <ul className="todo-list">
                        {
                            todos.map((todo, i) => <Todo todo={todo} index={i} setShowCreate={setShowCreate} key={i} />)
                        }
                    </ul>
    
        </>
    )
}

export default TodosList