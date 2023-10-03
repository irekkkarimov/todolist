export const createTask = async (task) => {
    let body = JSON.stringify(task)
    const headers = {
        'Content-Type': 'application/json',
        'Content-Length': body.length.toString()
    };

    await fetch("http://localhost:5000/api/task/create", {
        method: 'POST',
        headers: headers,
        body: body
    })
}

export const fetchTasks = async (id) => {
    return await fetch("http://localhost:5000/api/task/getAll?" + new URLSearchParams({
        user_id: id
    }))
}