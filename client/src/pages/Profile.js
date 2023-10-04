import '../styles/pagesStyles/Profile.css'

const Profile = (props) => {


    return (
        <profile className="profile">
            <div className="profile__main">
                <div className="profile__main__header">
                    <h3>Profile</h3>
                </div>
                <div className="profile__main__content">
                    <div className="profile__main__content__head">
                        <div className="profile__main__content__head__picture">
                            <img src="./images/placeholder-250x250.png" className="profile__pic"/>
                                <div className="profile__main__content__head__picture__slider">
                                </div>
                        </div>
                        <div className="profile__main__content__head__personal">
                            <h3>Name:</h3>
                            <div className="profile__main__content__head__personal__name">
                                <h4>name_placeholder</h4>
                            </div>
                            <h3>E-mail</h3>
                            <div className="profile__main__content__head__personal__email">
                                <h4>email_placeholder</h4>
                            </div>
                            <h3>Password:</h3>
                            <div className="profile__main__content__head__personal__password">
                                <h4>password_placeholder</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </profile>
    )
}

export default Profile