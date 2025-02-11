import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateTodo from "../components/CreateTodo"; 

let StartPage = () => {

    let navigate = useNavigate();

    useEffect(() => {
        if(!sessionStorage.getItem("user")) {
            navigate("/")
        }
    }, [])

    let signOut = () => {
        sessionStorage.removeItem("user");
        navigate("/")
    }

    return(
        <>
            <h2>StartPage!</h2>
            <button onClick={signOut}>Signout</button>
            <CreateTodo/>
        </>
    )
}

export default StartPage;