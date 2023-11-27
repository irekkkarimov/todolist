import {
    TASKLIST_ROUTE,
    PROFILE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE
} from "./utils/const";
import TaskList from "./pages/TaskList";
import Profile from "./pages/Profile"
import Login from "./pages/Login";
import Registration from "./pages/Registration";

export const routes = [
    {
        Path: TASKLIST_ROUTE,
        Component: TaskList
    },
    {
        Path: PROFILE_ROUTE,
        Component: Profile
    },
    {
        Path: LOGIN_ROUTE,
        Component: Login
    },
    {
        Path: REGISTRATION_ROUTE,
        Component: Registration
    }
]