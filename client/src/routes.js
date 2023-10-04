import {
    TASKLIST_ROUTE,
    PROFILE_ROUTE
} from "./utils/const";
import TaskList from "./pages/TaskList";
import Profile from "./pages/Profile"

export const routes = [
    {
        Path: TASKLIST_ROUTE,
        Component: TaskList
    },
    {
        Path: PROFILE_ROUTE,
        Component: Profile
    }
]