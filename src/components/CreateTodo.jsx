import { useState, useContext, useEffect } from "react";
import { TodosContext } from "../context/TodosContext";


let CreateTodo = ({ setShowCreate }) => {

    let [title, setTitle] = useState("");

    const { todos, editingTodo, saveTodo, removeTodo, editMode, setEditMode, setEditingTodo, updateTodo } = useContext(TodosContext);

    let handleCreate = () => {
        saveTodo(title);
        clearInputs();
    }

    let clearInputs = () => {
        setTitle("");
    }

    useEffect(() => {
        if(editingTodo !== "") {
            setTitle(todos[editingTodo].title)
        }
    }, [editingTodo])

    let exitBtnClick = () => {
        setShowCreate(false);
        setEditMode(false);
        clearInputs();
        setEditingTodo("");
    }

    let updateBtnClick = () => {
        updateTodo(editingTodo,title)
        setEditMode(false);
        setEditingTodo("");
        setShowCreate(false)
        clearInputs();
    }
    
    let deleteBtnClick = () => {
        removeTodo(editingTodo);
        clearInputs();
        setShowCreate();
        setEditingTodo("");
        setEditMode(false)
    }



    return (
        <div className="create-todo">
            <button className="exit-btn" onClick={exitBtnClick}></button>
            <input type="text" className="todo-input" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            {!editMode &&
                <button id="save-btn" onClick={handleCreate}>+</button>
            }
            {editMode &&
                <>
                    <button className="create-btn" onClick={deleteBtnClick}>Delete</button>
                    <button id="save-btn" onClick={updateBtnClick}>Save</button>
                </>
            }
        </div>
    )
}

export default CreateTodo;