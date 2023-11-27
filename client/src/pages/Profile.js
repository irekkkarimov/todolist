import '../styles/pagesStyles/Profile.css'
import ProfileStatistics from "../components/ProfileStatistics";
import ProfilePersonal from "../components/ProfilePersonal";
import {useContext, useState} from "react";
import EditProfile from "../components/modals/EditProfile";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Profile = observer(() => {
    const [editModalVisible, setEditModalVisible] = useState(false)

    // Fetching user and setting its props to blanks
    const {user} = useContext(Context)
    const {name, email} = user.user
    console.log(name)

    // Testing variables
    // const name = "Irek"
    // const email = "irekkkarimov@mail.ru"
    // const password = "strongPassword"

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
                    <ProfilePersonal name={name} email={email} />
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
            />
        </profile>
    )
})

export default Profile