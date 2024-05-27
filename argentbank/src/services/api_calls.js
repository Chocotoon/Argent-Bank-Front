export async function signUpUser(username, password) {
    const response = await fetch('http://localhost:3001/api/v1/user/login',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": `${username}`,
                "password": `${password}`
            })
        }
    )
    const data = await response.json()
    if (data.body) {
        const tokenData = data.body.token
        return tokenData
    }
    else {
        return "error with data"
    }

}

export async function getUserProfile(data) {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${data}`
        },
    })
    const userData = await response.json()
    if (userData) {
        const currentUser = userData.body
        return currentUser
    }
    else {
        return ("error")
    }
}

export async function putUser(token, firstName, lastName) {
    const response = await fetch('http://localhost:3001/api/v1/user/profile',
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                "firstName": `${firstName}`,
                "lastName": `${lastName}`
            })
        }
    )
    const data = await response.json()
    if (!data) {
        return ("error with data")
    }
    else {
        return data
    }
}