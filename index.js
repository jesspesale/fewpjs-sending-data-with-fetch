
function submitData(name, email) {
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    }

    return fetch("http://localhost:3000/users", configObj)
        .then(result => result.json())
        .then(jsonObj => appendDom(jsonObj.id))
        .catch(function(error) {
            appendDom(error.message)
        })
}

function appendDom(object) {
    const body = document.querySelector("body")
    body.innerHTML = object
}



