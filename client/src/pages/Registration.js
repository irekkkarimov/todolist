import {LOGIN_ROUTE, TASKLIST_ROUTE} from "../utils/const";
import {useLocation, useNavigate} from "react-router-dom";
import '../styles/pagesStyles/Auth.css'
import {useState} from "react";
import {login} from "../http/userApi";


const Registration = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE
    const {email, setEmail} = useState("")
    const {password, setPassword} = useState("")
    const {name, setName} = useState("")
    const {lastname, setLastname} = useState("")

    const submitRegistation = () => {
        let userToLogin = {
            email: email,
            password: password
        }
        login().then(() => window.alert("Submitted form"))
            .then(() => navigate(TASKLIST_ROUTE))
    }

    return (
        <auth className="auth">
            <div className="auth--container">
                <div className="auth--container--header">
                    {isLogin ? <h3>Login Page</h3> : <h3>Registration Page</h3>}
                </div>
                <div className="auth--container--content">
                    <form>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        <label>Password:</label>
                        <input
                            type="text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        >Password</input>
                        <input/>
                    </form>
                    <button
                        className="submit-modal"
                        onClick={submitRegistation}
                    ></button>
                </div>
            </div>
        </auth>
    )
}

export default Registration