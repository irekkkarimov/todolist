import jwt_decode from "jwt-decode"

export const registration = async (user) => {
    let body = JSON.stringify(user)
    const headers = {
        'Content-Type': 'application/json',
        'Content-Length': body.length.toString()
    };

    await fetch("http://localhost:5000/api/user/registation", {
        method: 'POST',
        headers: headers,
        body: body
    }).then(data => localStorage.setItem('token', data.token))
}

export const login = async (user) => {
    let body = JSON.stringify(user)
    const headers = {
        'Content-Type': 'application/json',
        'Content-Length': body.length.toString()
    };

    await fetch("http://localhost:5000/api/user/login", {
        method: 'POST',
        headers: headers,
        body: body
    }).then(data => localStorage.setItem('token', data.token))
}

export const check = async () => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    };

    let data = await fetch("http://localhost:5000/api/user/auth", {
        method: 'GET',
        headers: headers
    })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}