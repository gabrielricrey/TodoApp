import { useState, useContext, useEffect } from "react";
import { TodosContext } from "../context/TodosContext";


let CreateTodo = ({ setShowCreate, setShow }) => {

    let [title, setTitle] = useState("");
    let [desc, setDesc] = useState("");

    const { todos, editingTodo, saveTodo, removeTodo, editMode, setEditMode, setEditingTodo } = useContext(TodosContext);

    let handleCreate = () => {
        saveTodo({ title, desc});
        clearInputs();
    }

    let clearInputs = () => {
        setTitle("");
        setDesc("");
    }

    useEffect(() => {
        if(editingTodo !== "") {
            setTitle(todos[editingTodo].title)
            setDesc(todos[editingTodo].desc)
        }
    }, [editingTodo])



    return (
        <div className="create-todo">
            <button className="exit-btn" onClick={() => { setShowCreate(false); setEditMode(false); clearInputs(); setEditingTodo(""); setShow(true) }}></button>
            <input type="text" className="todo-input" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea name="" id="description" ></textarea>
        
            {!editMode &&
                <button id="save-btn" onClick={handleCreate}>Create</button>
            }
            {editMode &&
                <>
                    <button className="create-btn" onClick={() => {removeTodo(editingTodo); clearInputs();setShowCreate(false)}}>Delete</button>
                    <button id="save-btn" onClick={handleCreate}>Save</button>
                </>
            }
        </div>
    )
}

export default CreateTodo;