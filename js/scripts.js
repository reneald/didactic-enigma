const config = {
    backendBaseUri: "http://localhost:8080",
    createCharacterUri: "/character/new/",
    getAllTypesUri: "/type/all"
}

function createCharacter() {
    const name = document.getElementById("charName").value;
    const character = {
        name: name
    }
    fetch(`${config.backendBaseUri}${config.createCharacterUri}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(character)
    })
    .then(response => response.json())
    .then(response => alert(response.id))
    .catch(error => console.log(error));
}

function showTypes() {
    fetch(`${config.backendBaseUri}${config.getAllTypesUri}`, {
        method: "GET",
        mode: "no-cors"
    }).then(response => response.json())
    .then(response => alert(response))
    .catch(error => console.log(error));
}