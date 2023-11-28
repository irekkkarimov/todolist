import {LOGIN_ROUTE, TASKLIST_ROUTE} from "../utils/const";
import {useLocation, useNavigate} from "react-router-dom";
import '../styles/pagesStyles/Auth.css'
import {useState} from "react";
import {login} from "../http/userApi";


const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitLogin = () => {
        let userToLogin = {
            email: email,
            password: password
        }
        login(userToLogin).then(isSuccess => {
            if (isSuccess)
                navigate(TASKLIST_ROUTE)
            else
                window.alert("You was not logged in!")
        })
    }

    return (
        <auth className="auth">
            <div className="auth__container">
                <div className="auth__container__header">
                    {isLogin ? <h3>Login Page</h3> : <h3>Registration Page</h3>}
                </div>
                <div className="auth__container__content">
                    <form className="auth__form">
                        <label id="email"><h3 className="auth__input__name" >Email:</h3></label>
                        <input
                            type="email"
                            id="email"
                            className="auth__input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        <label id="password"><h3 className="auth__input__name" >Password:</h3></label>
                        <input
                            type="text"
                            id="password"
                            className="auth__input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </form>
                    <div className="auth__button__container">
                        <button
                            className="auth__button"
                            onClick={submitLogin}
                        >Login</button>
                    </div>
                </div>
            </div>
        </auth>
    )
}

export default Login