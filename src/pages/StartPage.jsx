import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TodosContextProvider } from "../context/TodosContext";
import TodosList from "../components/TodosList";



let StartPage = () => {



    return (
        <div className="startpage">
            <TodosContextProvider>
                    <TodosList />
            </TodosContextProvider>
        </div>
    )
}

export default StartPage;