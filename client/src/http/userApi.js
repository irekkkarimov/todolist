import jwt_decode from "jwt-decode"
import {$authHost, $host} from "./index";

export const registration = async (user) => {
    const {data} = await $host.post("api/user/registation", user)
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (user) => {
    const {data} = await $host.post("api/user/login", user)
    localStorage.setItem('token', data.token)
    return data.success
}

export const check = async () => {
    const {data} = await $authHost.get("api/user/auth")
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token);
}

export const edit = async (changedData) => {
    const {data} = await $authHost.put("api/user/edit", changedData)
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}