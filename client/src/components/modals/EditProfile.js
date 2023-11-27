import React, {useState} from "react";
import {edit} from "../../http/userApi";


const EditProfile = ({show, onHide, Name, Email}) => {
    const [name, setName] = useState(Name)
    const [password, setPassword] = useState("")

    function submitProfileForm() {
        let user = {
            name: name,
            password: password
        }

        edit(user)
            .then(() => window.alert("Submitted form"))
        onHide()
        reset()
    }

    function reset() {
        setName('')
        setPassword('')
    }

    return (
        show && (
            <modal>
                <div className="overlay" onClick={() => {
                    onHide()
                    reset()
                }}>
                </div>
                <div className="modal-content">
                    <h2>Profile editing</h2>
                    <div className="modal-hr"></div>
                    <form className="editProfile__form">
                        <h3>
                            Email
                        </h3>
                        <input
                            type="text"
                            id="profile-form-email"
                            name="email"
                            value={Email}
                            className="editProfile__form__profile-email-input modal__input"
                            placeholder="Type new email"
                            disabled
                        />
                        <h3>
                            Name:
                        </h3>
                        <input
                            type="text"
                            id="profile-form-name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="editProfile__form__profile-name-input modal__input"
                            placeholder="Type profile name"
                        />
                        <h3>
                            Password:
                        </h3>
                        <input
                            type="password"
                            id="profile-form-email"
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="editProfile__form__profile-password-input modal__input"
                            placeholder="Type new password"
                        />
                    </form>
                    <div className="modal-buttons">
                        <button
                            className="close-modal"
                            onClick={() => {
                                onHide()
                                reset()
                            }}>
                            Close
                        </button>
                        <button
                            className="submit-modal"
                            onClick={submitProfileForm}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </modal>
        )
    )
}

export default EditProfile