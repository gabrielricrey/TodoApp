import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";

let Todo = ({ todo, index }) => {

    let { removeTodo } = useContext(TodosContext);

    return (
        <>
            <li className="todo">
                <input type="radio" />
                <p>{todo.title}</p>
                <div className="buttons">
                    <button>Edit</button>
                    <button onClick={() => removeTodo(index)}>Delete</button>
                </div>
            </li>
        </>
    )
}

export default Todo;