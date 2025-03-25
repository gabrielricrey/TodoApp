import { useContext, useState } from "react";
import { TodosContext } from "../context/TodosContext";
import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities" 


let Todo = ({ title, id, done, index, setShowCreate }) => {

    let { removeTodo, editTodo, doneTodo, undoDone, setEditMode, setEditingTodo, editMode} = useContext(TodosContext);

    const {attributes, listeners, setNodeRef,transform,transition} = useSortable({id})

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    let handleClick = () => {
        setEditMode(true);
        setShowCreate(true);
        setEditingTodo(index);
    }

    let doneBtnClick = (e) => {
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
                <button className={done ? "check bgcolor" : "check"} onClick={doneBtnClick}>
                    {done && <p className="checkmark">&#10004;</p>}
                    </button>
                <p className={done ? "done" : ""}>{title}</p>
                {!done && 
                <i className="fa-solid fa-grip-lines" id="drag" {...listeners}></i>
                }
                {done && <button className="delete" onClick={(e) => { e.stopPropagation(); removeTodo(index)}}><i className="fa-solid fa-trash"></i></button>}
            </li>
        </>
    )
}

export default Todo;