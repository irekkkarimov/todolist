import {$authHost, $host} from "./index";

export const createTask = async (task) => {
    const {data} = await $authHost.post("api/task/create", task)
}

export const fetchTasks = async (id) => {
    const {data} = await $authHost.get("api/task/getall")
    console.log(data)
    return data.tasks
}

export const deleteTask = async (id) => {
    const {data} = await $authHost.delete("api/task/delete?" + new URLSearchParams({
        taskId: id
    }))
    console.log(data.message)
}