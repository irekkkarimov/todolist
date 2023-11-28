import '../styles/componentsStyles/profileStatistics.css'
import React, {useEffect, useState} from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Pie} from "react-chartjs-2";
import chartData from '../utils/chartData'
import {Categories} from '../utils/taskCategories'
import {fetchTasks} from "../http/taskApi";
import task from "./Task";

ChartJS.register(ArcElement, Tooltip, Legend)

const ProfileStatistics = () => {
    const [tasksCount, setTasksCount] = useState({})

    useEffect(() => {
        let tasks = []
        fetchTasks()
            .then(tasksReceived => tasks = tasksReceived)
            .then(() => {
                let categoriesForTaskCountObject = {}
                for (let i = 0; i < Categories.length; i++) {
                    let category = Categories[i]
                    categoriesForTaskCountObject[category.id] = {name: category.name, count: 0}
                    console.log(categoriesForTaskCountObject)
                }
                console.log(tasks)
                console.log(categoriesForTaskCountObject)
                tasks.forEach(item => {
                    if (item.category === 0)
                        categoriesForTaskCountObject[5].count++
                    else
                        categoriesForTaskCountObject[item.category].count++
                })
                setTasksCount(categoriesForTaskCountObject)
                console.log(categoriesForTaskCountObject)
            })
    }, []);


    for (let i = 0; i < Categories.length; i++) {
        chartData.labels[i] = Categories[i].name
        chartData.datasets[0].backgroundColor[i] = Categories[i].color
        chartData.datasets[0].borderColor[i] = Categories[i].border_color
        chartData.datasets[0].data[i] = Categories[i].tasks
    }


    return (
        <profileStatistics className="profileStatistics">
            <div className="profileStatistics__header">
                <h2>Statistics</h2>
            </div>
            <div className="profileStatistics__info">
                <div className="profileStatistics__left">
                    <div className="profileStatistics__left__done">
                        <h3>Done:</h3>
                        <div className="profileStatistics__left__done-value">
                            <h4>34</h4>
                        </div>
                    </div>
                    <div className="profileStatistics__left__active">
                        <h3>Active:</h3>
                        <div className="profileStatistics__left__active-value">
                            <h4>7</h4>
                        </div>
                    </div>
                    <div className="profileStatistics__left__wasted">
                        <h3>Wasted:</h3>
                        <div className="profileStatistics__left__wasted-value">
                            <h4>11</h4>
                        </div>
                    </div>
                </div>
                <div className="profileStatistics__right">
                    <div className="profileStatistics__right__count">
                        <h3>Active:</h3>
                        {Object.values(tasksCount).map(item => (
                            <div className="profileStatistics__right__count__wrapper">
                                <h4 className="profileStatistics__right__count__wrapper__name">{item.name + ':'}</h4>
                                <div className="profileStatistics__right__count__wrapper__value">
                                    <h4>{item.count}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="profileStatistics__right__chart">
                        <StatisticsChart data={chartData} />
                    </div>
                </div>
            </div>
        </profileStatistics>
    )
}

export default ProfileStatistics

function StatisticsChart(props) {
    const {data} = props
    const options = {
        plugins: {
            legend: {
                position: 'top',// Position the legend on the left side
                labels: {
                    boxWidth: 10,
                    boxHeight: 10,
                    font: {
                        family: "'Roboto Slab', serif",
                        size: 16,
                        weight: 500
                    },
                    color: '#000'
                }
            }
        }
    };


    return <Pie data={data} options={options} style={{width: "300px", height: "250px"}} />
}