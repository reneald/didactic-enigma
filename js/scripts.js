const config = {
    backendBaseUri: "http://localhost:8080",
    createEmptyCharacterUri: "/character/new"
}

function createEmptyCharacter() {
    fetch(`${config.backendBaseUri}${config.createEmptyCharacterUri}`, {
        method: "POST"
    })
    .then(response => response.json())
    .then(response => alert(response))
    .catch(error => console.log(error))
}