
//Asa cream o functie
//Ca sa executi o functie trebuie neaparat sa o apelezi in consola

function reply() {
    // 1. copy the value from the input
    personName = nameInput.value
    // 2. create the message
    message = "Hello, " + personName + "!"
    // 3. send message to the container
    msgContainer.innerHTML = message
}

