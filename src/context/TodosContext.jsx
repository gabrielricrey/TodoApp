import { createContext, useEffect, useState } from "react";

export const TodosContext = createContext();

export const TodosContextProvider = ({ children }) => {

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
    const [editMode, setEditMode] = useState(false);
    const [editingTodo, setEditingTodo] = useState("");
    

    let saveTodo = (todo) => {
        setTodos([...todos, todo]);
    }

    let removeTodo = (i) => {
        let list = [...todos];
        list.splice(i,1);
        setTodos(list);
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));

    }, [todos])

    return (
        <TodosContext.Provider value={{saveTodo, todos, setTodos, removeTodo, editMode,setEditMode, setEditingTodo, editingTodo}}>
            {children}
        </TodosContext.Provider>
    );

};

