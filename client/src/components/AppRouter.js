import {Route, Routes} from "react-router-dom";
import {routes} from "../routes";
import React from "react";


const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({Path, Component}) => (
                <Route path={Path} element={<Component />} />
            ))}
        </Routes>
    )
}

export default AppRouter
