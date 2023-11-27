import {LOGIN_ROUTE, TASKLIST_ROUTE} from "../utils/const";
import {useLocation, useNavigate} from "react-router-dom";
import '../styles/pagesStyles/Auth.css'
import {useState} from "react";
import {login} from "../http/userApi";
import '../styles/componentsStyles/modalsStyles/modals.css'


const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE
    const {email, setEmail} = useState("")
    const {password, setPassword} = useState("")

    const submitLogin = () => {
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
                        <label id="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        <label id="password">Password:</label>
                        <input
                            type="text"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                        <input/>
                    </form>
                    <button
                        className="submit-modal"
                        onClick={submitLogin}
                    ></button>
                </div>
            </div>
        </auth>
    )
}

export default Login