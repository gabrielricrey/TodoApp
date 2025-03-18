import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const TodosContext = createContext();

export const TodosContextProvider = ({ children }) => {

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
    const [editMode, setEditMode] = useState(false);
    const [editingTodo, setEditingTodo] = useState("");

    function handleDragEnd(event) {
        const {active, over} = event;

        if(!over) return;

        const todoId = active.id;
        const newStatus = over.id;


    }
    

    let saveTodo = (title) => {
        let todo = {id : uuidv4(),title,done: false}
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
        <TodosContext.Provider value={{saveTodo, todos, setTodos, doneTodo, undoDone,removeTodo, updateTodo, editMode,setEditMode, setEditingTodo, editingTodo, handleDragEnd}}>
            {children}
        </TodosContext.Provider>
    );

};

