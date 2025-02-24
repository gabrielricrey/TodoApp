import { createContext, useEffect, useState } from "react";

export const TodosContext = createContext();

export const TodosContextProvider = ({ children }) => {

    let [todos, setTodos] = useState((JSON.parse(sessionStorage.getItem("user"))).todos);

    let saveTodo = (todo) => {
        setTodos([...todos, todo]);
    }

    useEffect(() => {

        let allUsers = JSON.parse(localStorage.getItem("users"));
        let userIndex = allUsers.findIndex(user => user.id === JSON.parse(sessionStorage.getItem("user")).id);
        allUsers[userIndex].todos = todos;
        localStorage.setItem("users", JSON.stringify(allUsers));

    }, [todos])

    return (
        <TodosContext.Provider value={saveTodo}>
            {children}
        </TodosContext.Provider>
    );

};

