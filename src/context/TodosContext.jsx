import { createContext, useEffect, useState } from "react";

export const TodosContext = createContext();

export const TodosContextProvider = ({ children }) => {

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
    const [editMode, setEditMode] = useState(false);
    const [editingTodo, setEditingTodo] = useState("");
    

    let saveTodo = (title) => {
        let todo = {title,done: false}
        setTodos([...todos, todo]);
    }

    let removeTodo = (i) => {
        let list = [...todos];
        list.splice(i,1);
        setTodos(list);
    }

    let updateTodo = (i,title) => {
        let list = [...todos];
        list[i].title = title;
        setTodos(list);
    }

    let doneTodo = (i) => {
        let list = [...todos];
        list[i].done = true;
        setTodos(list);
    }

    let undoDone = (i) => {
        let list = [...todos];
        list[i].done = false;
        setTodos(list);
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));

    }, [todos])

    return (
        <TodosContext.Provider value={{saveTodo, todos, setTodos, doneTodo, undoDone,removeTodo, updateTodo, editMode,setEditMode, setEditingTodo, editingTodo}}>
            {children}
        </TodosContext.Provider>
    );

};

