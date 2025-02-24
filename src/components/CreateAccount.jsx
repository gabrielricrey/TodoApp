import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

let CreateAccount = () => {

    let navigate = useNavigate();

    let [firstName,setFirstName] = useState("");
    let [lastName,setLastName] = useState("");
    let [username,setUsername] = useState("");
    let [password,setPassword] = useState("");
    let [confirmPassword,setConfirmPassword] = useState("");
    let [email,setEmail] = useState("");

    let createAccount = () => {

        if(!firstName || !lastName || !username || !password || !confirmPassword || !email) {
            alert('Fill in all fields')
            return;
        }

        if(password !== confirmPassword) {
            alert('Passwords not equal')
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.some(user => user.username === username )) {
            alert('Username already in Use')
            return;
        }

        let newUser = {id : uuidv4(),firstName,lastName,username,password,email,todos: []};
        let updatedUsers = [...users,newUser];
        localStorage.setItem("users",JSON.stringify(updatedUsers));

        alert('Account created successfully');
        navigate("/");

    }


    return(
        <>
            <h2>Create Account</h2>
            <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
            <input type="text" onChange={(e) => setLastName(e.target.value)}/>
            <input type="text" onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <input type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
            <input type="text" onChange={(e) => setEmail(e.target.value)}/>
            <button onClick={createAccount}>Create Account</button>
        </>
    )
}

export default CreateAccount;