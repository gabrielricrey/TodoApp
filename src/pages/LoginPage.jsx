import Login from "../components/Login";
import { useNavigate } from "react-router-dom";

let LoginPage = () => {

    let navigate = useNavigate();

    return(
        <>
            <h1>TodoApp</h1>
            <Login></Login>
            <button onClick={() => navigate("/create-account")}>Create Account</button>
        </>
    )
}

export default LoginPage;