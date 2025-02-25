import { useState, useContext } from "react";
import { TodosContext } from "../context/TodosContext";


let CreateTodo = () => {

    let [title, setTitle] = useState("");
    let [desc, setDesc] = useState("");
    let [today, setToday] = useState(true);

    const {saveTodo} = useContext(TodosContext);

    let handleCreate = () => {
        saveTodo({title,desc,today});
        clearInputs();
    }

    let clearInputs = () => {
        setTitle("");
        setDesc("");
        setToday(true)
    }


    return (
        <div className="create-todo">
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
            <div className="radio-btns">
                <div>
                    <label htmlFor="day">Today</label>
                    <input type="radio" name="day" value="1" onChange={(e) => setToday(true)} defaultChecked />
                </div>
                <div>
                    <label htmlFor="day">Tomorrow</label>
                    <input type="radio" name="day" value="2" onChange={(e) => setToday(false)} />
                </div>
            </div>
            <button onClick={handleCreate}>Create</button>
        </div>
    )
}

export default CreateTodo;