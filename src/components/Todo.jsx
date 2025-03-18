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
        setDone(!done1)

        e.stopPropagation(); 

        if(!done) {
            doneTodo(index)
        } else {
            undoDone(index)
        }
    }


    return (
        <>
            <li ref={setNodeRef} {...attributes} style={style} className="todo" onClick={handleClick}>
                <button className={done1 ? "check bgcolor" : "check"} onClick={doneBtnClick}>{done1 && <p className="checkmark">&#10004;</p>}</button>
                <p className={done1 ? "done" : ""}>{title}</p>
                <i className="fa-solid fa-grip-lines" id="drag" {...listeners}></i>
                {done1 && <button className="delete" onClick={(e) => { e.stopPropagation(); removeTodo(index)}}><i className="fa-solid fa-trash"></i></button>}
            </li>
        </>
    )
}

export default Todo;