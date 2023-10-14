import React, {useEffect, useState} from "react";
import {Categories} from "../utils/taskCategories";
import Task from "../components/Task";
import '../styles/pagesStyles/TaskList.css'
import CreateTask from "../components/modals/CreateTask";
import {fetchTasks} from "../http/taskApi";
import {observer} from "mobx-react-lite";

const TaskList = () => {
    const [selected, setSelected] = useState(-1)
    const [addModalVisible, setAddModalVisible] = useState(false)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetchTasks(3)
            .then(response => response.json())
            .then(json => setTasks(json.rows))
    }, [addModalVisible]);

    return (
        <tasklist className="task-list">
            <div className="task-list__categories">
                <Category
                    className="task-list__categories__category"
                    key={-1}
                    item={{name: 'all', url: 'all_icon.png'}}
                    ifSelected={-1 === selected}
                    onClick={() => {
                        setSelected(-1)
                    }}
                />
                {
                    Categories.map(item =>
                        <Category
                            className="task-list__categories__category"
                            key={item.id}
                            item={item}
                            ifSelected={item.id === selected}
                            onClick={() => {
                                setSelected(item.id)
                            }}
                        />
                    )
                }
            </div>
            <div className="task-list__tasks">
                <div className="task-list__tasks__top">
                    <h3>Task List</h3>
                    <div className="task-list__tasks__top__right">
                        <button
                            className="task-list__tasks__top__right__add"
                            onClick={() => setAddModalVisible(true)}
                        >
                            Add
                        </button>
                        <button
                            className="task-list__tasks__top__right__selection"
                        >
                            Select
                        </button>
                    </div>
                </div>
                <div className="task-list__tasks__content">
                    {tasks.map(item => (
                        <Task id={item.id} name={item.name} description={item.description} date={item.deadline} show={selected === -1 ? true : item.category === selected} />
                    ))}
                </div>
            </div>
            <div className="task-list__right" id="resize">
                <div className="task-list__right__top">
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloremque hic rerum sed sunt?</p>
            </div>
            <CreateTask show={addModalVisible} onHide={() => setAddModalVisible(false)} />
        </tasklist>
    )
}

export default TaskList

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

