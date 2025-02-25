import { useContext } from "react"
import { TodosContext } from "../context/TodosContext"
import { Link } from "react-router-dom"
import Todo from "./Todo"

let TodosList = () => {

    let {todos, setTodos} = useContext(TodosContext)

    return(
        <>
        <h2>TodosList</h2>
        <ul>
            {
                todos.map((todo,i) => <Todo todo={todo} index={i} key={i}/>)
            }
        </ul>
        </>
    )
}

export default TodosList