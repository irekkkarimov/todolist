import React, {useEffect, useState} from "react";
import '../styles/componentsStyles/Task.css'

const Task = (props) => {
    const {name, description, date, show} = props;
    const [calculatedDate, expiration]  = calculateDeadline(date, name)
    const [divStyle, setDivStyle] = useState({})
    const [textStyle, setTextStyle] = useState({})


    function colorTheDate() {
        switch (expiration) {
            case 'expired':
                setDivStyle({
                    backgroundColor: "#de492f"
                })
                break
            case 'years':
                setDivStyle({
                    backgroundColor: "#4aba8a"
                })
                break
            case 'months':
                setDivStyle({
                    backgroundColor: "#4aba75"
                })
                break
            case 'days':
                setDivStyle({
                    backgroundColor: "#59ab3c"
                })
                break
            case 'hours':
                setDivStyle({
                    backgroundColor: "#e0be60"
                })
                break
            case 'minutes':
                setDivStyle({
                    backgroundColor: "#db6d5a"
                })
                break
        }
    }

    useEffect(() => {
        colorTheDate()
    }, []);

    return (
        show && <task className="task">
            <div className="task__header">
                <h4 className="task__header__name">{name}</h4>
                <div className="task__header__right" style={divStyle}>
                    <p style={textStyle}>{calculatedDate}</p>
                </div>
            </div>
            <p className="task__description">{description}</p>
        </task>
    )
}

export default Task


function calculateDeadline(dateAsString, name) {
    let date = new Date(dateAsString)
    let now = new Date()
    let difference = date.getTime() - now.getTime()
    let inMinutes = Math.floor(difference / 1000 / 60)
    let inHours = Math.floor(inMinutes / 60)
    let inDays = Math.floor(inHours / 24)
    let inMonths = Math.floor(inDays / 30)
    let years = Math.floor(inMonths / 12)
    let months = inMonths - years * 12
    let days = inDays - months * 30
    let hours = inHours - days * 24
    let minutes = inMinutes - hours * 60

    if (difference < 0)
        return ["Expired", 'expired']
    if (years > 0)
        return ["1+ year left", 'years']
    if (months > 0)
        return [`${months} months left`, 'months']
    if (days > 0)
        if (days === 1)
            return ['1 day left', 'days']
        return [`${days} days left`, 'days']
    if (hours > 0)
        return [`${hours} hours left`, 'hours']

    return [`${minutes} minutes left`, 'minutes']
}