import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";

let Todo = ({ todo, index, setShowCreate }) => {

    let { removeTodo, editTodo, setEditMode } = useContext(TodosContext);

    return (
        <>
            <li className="todo">
                <input type="checkbox" />
                <p>{todo.title}</p>
                <div className="buttons">
                    <button onClick={() => {editTodo(index); setShowCreate(true); setEditMode(true)}}>Edit</button>
                </div>
            </li>
        </>
    )
}

export default Todo;