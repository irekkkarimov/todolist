import '../styles/pagesStyles/Profile.css'
import ProfileStatistics from "../components/ProfileStatistics";
import ProfilePersonal from "../components/ProfilePersonal";
import {useState} from "react";
import EditProfile from "../components/modals/EditProfile";

const Profile = (props) => {
    const [editModalVisible, setEditModalVisible] = useState(false)
    // const {name, email, password} = props
    const name = "Irek"
    const email = "irekkkarimov@mail.ru"
    const password = "strongPassword"

    return (
        <profile className="profile">
            <div className="profile__main">
                <div className="profile__main__header">
                    <h3>Profile</h3>
                </div>
                <div className="profile__main__content">
                    <div onClick={() => setEditModalVisible(true)} className="profile__main__content__edit">
                        <img src="./images/edit_icon.png"/>
                    </div>
                    <ProfilePersonal name={name} email={email} password={password} />
                    <div className="profile__main__content__hr"></div>
                    <ProfileStatistics/>
                    <div className="profile__main__content__exit">
                        <button className="profile__main__content__exit__button">Exit</button>
                    </div>
                </div>
            </div>
            <EditProfile
                show={editModalVisible}
                onHide={() => setEditModalVisible(false)}
                Name={name}
                Email={email}
                Password={password}
            />
        </profile>
    )
}

export default Profile