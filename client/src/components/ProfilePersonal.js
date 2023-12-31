import '../styles/componentsStyles/profilePersonal.css'

const ProfilePersonal = ({name, email, url}) => {
    console.log(url)
    return (
        <profilePersonal className="profilePersonal">
            <div className="profilePersonal__picture">
                <img src={url} className="profile__pic"/>
            </div>
            <div className="profilePersonal__data">
                <h3>Name:</h3>
                <div className="profilePersonal__data__name">
                    <h4>{name}</h4>
                </div>
                <h3>E-mail</h3>
                <div className="profilePersonal__data__email">
                    <h4>{email}</h4>
                </div>
                <h3>Password:</h3>
                <div className="profilePersonal__data__password">
                    <h4>********</h4>
                </div>
            </div>
        </profilePersonal>
    )
}

export default ProfilePersonal