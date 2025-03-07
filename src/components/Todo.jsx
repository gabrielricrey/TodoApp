import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";

let Todo = ({ todo, index, setShowCreate }) => {

    let { removeTodo, editTodo, setEditMode, setEditingTodo } = useContext(TodosContext);
    console.log(index);

    return (
        <>
            <li className="todo">
                <button className="check"></button>
                <p>{todo.title}</p>
            </li>
        </>
    )
}

export default Todo;