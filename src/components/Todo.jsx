import { useContext, useState } from "react";
import { TodosContext } from "../context/TodosContext";

let Todo = ({ todo, index, setShowCreate }) => {

    let [done,setDone] = useState(false)

    let { removeTodo, editTodo, doneTodo, undoDone, setEditMode, setEditingTodo, editMode} = useContext(TodosContext);
    console.log(index);

    let handleClick = () => {
        console.log("clicked")
        setEditMode(true);
        setShowCreate(true);
        setEditingTodo(index);
    }

    let doneBtnClick = (e) => {
        setDone(!done)

        e.stopPropagation(); 

        if(!done) {
            doneTodo(index)
        } else {
            undoDone(index)
        }
    }

    return (
        <>
            <li className="todo" onClick={handleClick}>
                <button className={done ? "check bgcolor" : "check"} onClick={doneBtnClick}>{done && <p className="checkmark">&#10004;</p>}</button>
                <p className={todo.done ? "done" : ""}>{todo.title}</p>
                {todo.done && <button className="delete" onClick={(e) => { e.stopPropagation(); removeTodo(index)}}>x</button>}
            </li>
        </>
    )
}

export default Todo;