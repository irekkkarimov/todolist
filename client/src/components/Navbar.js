import dots_pic from "../assets/9dots.svg.png"
import '../styles/componentsStyles/Navbar.css'
import {useNavigate} from "react-router-dom";
import {PROFILE_ROUTE, TASKLIST_ROUTE} from "../utils/const";

export default function Navbar() {
    const navigate = useNavigate()

    return (
        <nav className="navbar">
            <div className="navbar__content">
                <h1 className="navbar__content__heading" onClick={() => navigate(TASKLIST_ROUTE)}>
                    TODO LIST
                </h1>
                <div className="navbar__content__clickable">
                    <div className="navbar__content__clickable__dots">
                        <img src={dots_pic}  alt="dots"/>
                    </div>
                    <div className="navbar__content__clickable__profile-pic" onClick={() => navigate(PROFILE_ROUTE)}>

                    </div>
                </div>
            </div>

        </nav>
    )
}