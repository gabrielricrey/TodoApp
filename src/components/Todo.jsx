import { useContext, useState } from "react";
import { TodosContext } from "../context/TodosContext";
import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities" 


let Todo = ({ title, id, done, index, setShowCreate }) => {

    let [done1,setDone] = useState(false)

    let { removeTodo, editTodo, doneTodo, undoDone, setEditMode, setEditingTodo, editMode} = useContext(TodosContext);

    const {attributes, listeners, setNodeRef,transform,transition} = useSortable({id})

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };



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
            <li ref={setNodeRef} {...attributes} {...listeners} style={style} className="todo" onClick={handleClick}>
                <button className={done ? "check bgcolor" : "check"} onClick={doneBtnClick}>{done1 && <p className="checkmark">&#10004;</p>}</button>
                <p className={done ? "done" : ""}>{title}</p>
                {done && <button className="delete" onClick={(e) => { e.stopPropagation(); removeTodo(index)}}>x</button>}
            </li>
        </>
    )
}

export default Todo;