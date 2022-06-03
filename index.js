function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    })
    .then(res => res.json())
    .then(data => {
        const ccc = document.getElementsByTagName('body')[0]
        ccc.textContent = data.id

    })
    .catch(error => {
        const body = document.getElementsByTagName('body')[0]
        body.textContent = error.message
    })
}
