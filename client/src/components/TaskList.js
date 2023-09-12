import React, {useEffect, useState} from "react";
import {Categories} from "../utils/taskCategories";
import Task from "./Task";

export default function TaskList() {

    const [selected, setSelected] = useState("")

    // window.addEventListener('resize', () => {
    //     let element = document.getElementById("resize")
    //     if (element.width < "100px")
    //         element.style.display = ""
    //     console.log(element)
    // })

    return (
        <tasklist className="task-list">
            <div className="task-list__categories">
                {
                    Categories.map(item =>
                        <Category
                            className="task-list__categories__category"
                            key={item.name}
                            item={item}
                            ifSelected={item.name === selected}
                            onClick={() => {
                                setSelected(item.name)
                            }}
                        />
                    )
                }
            </div>
            <div className="task-list__tasks">
                <Task />
            </div>
            <div className="task-list__right" id="resize">
                <div className="task-list__right__top">
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloremque hic rerum sed sunt?</p>
            </div>
        </tasklist>
    )
}

const Category = (props) => {
    const {item, ifSelected} = props
    const {name, url} = item
    const [color, setColor] = useState("#F6EBEB")
    // const [selected, setSelected] = useState(ifSelected)

    useEffect(() => {
        setColor(ifSelected ? "#eac8c8" : "#F6EBEB")
    }, [ifSelected]);


    return (
        <div className="task-list__categories__category"
             onMouseOver={() => {
                 if (!ifSelected)
                     setColor("#ecdfdf")
             }}
             onMouseOut={() => {
                 if (!ifSelected)
                     setColor("#F6EBEB")
             }}
             style={{backgroundColor: color}}
             onClick={props.onClick}
        >
            <img src={'./images/' + url} alt={name}/>
        </div>
    )
}

