import { useState } from "react"
import { useNavigate } from "react-router-dom";


let Login = () => {

    let navigate = useNavigate();

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    let login = () => {

        if (username && password) {

            let users = JSON.parse(localStorage.getItem("users"));

            if (!users) {
                alert('Wrong Username or Password')
            } else {
                let user = users.find(user => user.password === password && user.username === username)
                if (user) {
                    sessionStorage.setItem("user", JSON.stringify(user));
                    navigate("/start")

                } else {
                    alert('Wrong Username or Password')
                }
            }

        } else {
            alert('Fill in both fields')
        }

    }

    return (
        <>
            <h2>Login</h2>
            <div className="login-form">
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={login}>Login</button>
            </div>
        </>
    )
}

export default Login