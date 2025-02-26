import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TodosContextProvider } from "../context/TodosContext";
import TodosList from "../components/TodosList";

let StartPage = () => {

    let navigate = useNavigate();

    useEffect(() => {
        if (!sessionStorage.getItem("user")) {
            navigate("/")
        }
    }, [])

    let signOut = () => {
        sessionStorage.removeItem("user");
        navigate("/")
    }

    return (
        <div className="startpage">
            <TodosContextProvider>
                <nav>
                    <button onClick={signOut}>Signout</button>
                </nav>
                <TodosList />
            </TodosContextProvider>
        </div>
    )
}

export default StartPage;