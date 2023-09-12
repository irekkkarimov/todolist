import React from "react";

export default function Task() {


    return (
        <task className="task">
            <div className="task__header">
                <h4 className="task__header__name">task name</h4>
                <div className="task__header__right">
                    <p>12:00 1st January</p>
                </div>
            </div>
            <p className="task__description">task desc</p>
            {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloremque hic rerum sed sunt? Animi architecto beatae, fuga incidunt itaque mollitia non nostrum odio quisquam quos repellendus tempore vero voluptatum!</p>*/}
            <div onMouseOver={() => document.getElementById('task_slider').style.width = "100px"} className="task__slider" id="task__slider"></div>
        </task>
    )
}