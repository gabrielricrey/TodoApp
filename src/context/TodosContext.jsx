import { createContext, useEffect, useState } from "react";

export const TodosContext = createContext();

export const TodosContextProvider = ({ children }) => {

    let [todos, setTodos] = useState((JSON.parse(sessionStorage.getItem("user"))).todos);

    let saveTodo = (todo) => {
        setTodos([...todos, todo]);
    }

    let removeTodo = (i) => {
        let list = [...todos];
        list.splice(i,1);
        setTodos(list);
    }

    useEffect(() => {

        let allUsers = JSON.parse(localStorage.getItem("users"));
        let userIndex = allUsers.findIndex(user => user.id === JSON.parse(sessionStorage.getItem("user")).id);
        allUsers[userIndex].todos = todos;
        localStorage.setItem("users", JSON.stringify(allUsers));

    }, [todos])

    return (
        <TodosContext.Provider value={{saveTodo, todos, setTodos, removeTodo}}>
            {children}
        </TodosContext.Provider>
    );

};

