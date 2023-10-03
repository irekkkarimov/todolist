import React, {useState} from 'react';
import '../../styles/componentsStyles/modalsStyles/modals.css'
import {createTask} from "../../http/taskApi";


export default function CreateTask({show, onHide}) {
    const [taskName, setTaskName] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [taskDeadline, setTaskDeadline] = useState("")
    const [taskCategory, setTaskCategory] = useState(0)

    let categories = ["Work", "Home", "Work", "Home", "Work"]


    function submitTaskForm(e) {
        if (taskName === "") { document.getElementById("task-form-name").style = "border: 2px solid #dc3545; background-color: #f8d7da"; return; }
        if (taskDescription === "") { document.getElementById("task-form-description").style = "border: 2px solid #dc3545; background-color: #f8d7da"; return; }
        if (taskDeadline === "") { document.getElementById("task-form-deadline").style = "border: 2px solid #dc3545; background-color: #f8d7da"; return; }

        let newTask = {
            "user_id": 3,
            "name": taskName,
            "description": taskDescription,
            "category": taskCategory,
            "deadline": taskDeadline
        }

        createTask(newTask).then(() => {
            window.alert("Task was successfully added")
            onHide()
            reset()
        })
    }

    function reset() {
        setTaskName("")
        setTaskDescription("")
        setTaskDeadline("")
        setTaskCategory(0)
    }

    function handleChange(e) {
        if (e.target.value === "")
            e.target.style = "border: 2px solid #dc3545; background-color: #f8d7da"
        else
            e.target.style = "2px solid lightgrey; background-color: white"
    }

    if(show)
        document.body.classList.add('active-modal')
    else
        document.body.classList.remove('active-modal')

    return (
        show && (
            <modal>
                <div className="overlay" onClick={() => {
                    onHide()
                    reset()
                }}>
                </div>
                <div className="modal-content">
                    <h2>Creating new task</h2>
                    <div className="modal-hr"></div>
                    <form className="createTask__form">
                        <h3>
                            Task name:
                        </h3>
                        <input
                            type="text"
                            id="task-form-name"
                            name="name"
                            value={taskName}
                            onChange={(e) => {
                                setTaskName(e.target.value)
                                handleChange(e)
                            }}
                            className="createTask__form__task-name-input modal__input"
                            placeholder="Type task name"
                            required
                        />
                        <h3>
                            Description:
                        </h3>
                        <textarea
                            id="task-form-description"
                            name="description"
                            value={taskDescription}
                            onChange={(e) => {
                                setTaskDescription(e.target.value)
                                handleChange(e)
                            }}
                            className="createTask__form__task-description-input modal__input"
                            placeholder="What exactly should you do..."
                            rows="5"
                            required
                        />
                        <h3>
                            Deadline:
                        </h3>
                        <input
                            type="datetime-local"
                            id="task-form-deadline"
                            name="deadline"
                            value={taskDeadline}
                            onChange={(e) => {
                                setTaskDeadline(e.target.value)
                                handleChange(e)
                            }}
                            className="createTask__form__task-date-input modal__input"
                            required
                        />
                        <h3>
                            Choose the category:
                        </h3>
                        <select
                            name="taskCategory"
                            value={taskCategory}
                            onChange={(e) => setTaskCategory(e.target.value)}
                            className="createTask__form__task-category-select
                            modal__input">
                            <option
                                value=""
                                className="createTask__form__task-category-select__option_default"
                                disabled selected
                            >---</option>
                            {categories.map((item, index) => (
                                <option value={index + 1} className="createTask__form__task-category-select__option">{item}</option>
                            ))}
                        </select>
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
                            onClick={submitTaskForm}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </modal>
        )
    )
}