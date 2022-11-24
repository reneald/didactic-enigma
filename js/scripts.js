const config = {
    // backendBaseUri: "https://cypher.saavedro.duckdns.org",
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
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        // mode: "no-cors",
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
    .then(response => showTypeNamesOnPage(response))
    .catch(error => console.log(error));
}

function showTypeNamesOnPage(listOfTypes) {
    listOfTypes.array.forEach(element => {
        document.getElementById("types").append('<p>' + element.name + '</p>');
    });
    
}