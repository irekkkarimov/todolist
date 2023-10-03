import React from "react";
import '../styles/componentsStyles/Task.css'

export default function Task(props) {
    // const {name, desc, date} = props;
    const name = props.name
    const desc = props.description
    const date = props.date

    return (
        <task className="task">
            <div className="task__header">
                <h4 className="task__header__name">{name}</h4>
                <div className="task__header__right">
                    <p>{date}</p>
                </div>
            </div>
            <p className="task__description">{desc}</p>
        </task>
    )
}