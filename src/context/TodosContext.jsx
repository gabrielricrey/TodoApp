import { createContext, useEffect, useState } from "react";

export const TodosContext = createContext();

export const TodosContextProvider = ({ children }) => {

    const storedUser = JSON.parse(localStorage.getItem("users"))?.find(user => user.id === JSON.parse(sessionStorage.getItem("user")).id);

    const [todos, setTodos] = useState(storedUser?.todos || []);
    const [editMode, setEditMode] = useState(false);

    let saveTodo = (todo) => {
        setTodos([...todos, todo]);
    }

    let removeTodo = (i) => {
        let list = [...todos];
        list.splice(i,1);
        setTodos(list);
    }

    let editTodo = (i) => {

    }

    useEffect(() => {

        let allUsers = JSON.parse(localStorage.getItem("users"));
        let userIndex = allUsers.findIndex(user => user.id === JSON.parse(sessionStorage.getItem("user")).id);
        allUsers[userIndex].todos = todos;
        localStorage.setItem("users", JSON.stringify(allUsers));

    }, [todos])

    return (
        <TodosContext.Provider value={{saveTodo, todos, setTodos, removeTodo, editTodo, editMode,setEditMode}}>
            {children}
        </TodosContext.Provider>
    );

};

