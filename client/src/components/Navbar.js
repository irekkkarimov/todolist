import dots_pic from "../assets/9dots.svg.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__content">
                <h1 className="navbar__content__heading">
                    TODO LIST
                </h1>
                <div className="navbar__content__clickable">
                    <div className="navbar__content__clickable__dots">
                        <img src={dots_pic}  alt="dots"/>
                    </div>
                    <div className="navbar__content__clickable__profile-pic">

                    </div>
                </div>
            </div>

        </nav>
    )
}