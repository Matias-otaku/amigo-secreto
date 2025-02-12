// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const  inputAmigo = document.getElementById ("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById ("listaAmigos");
const ulResultado = document.getElementById ("resultado");
const limite = 5;


function agregarAmigo(){
    listaAmigos.push(inputAmigo.value);
    if (listaAmigos.length >= limite + 1) {
        limpiarCaja();
        return;
    }
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`
    limpiarCaja();
    return;
}


function sortearAmigo() {
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li> El amigo secreto es: ${amigoSecreto}</li>`
}

function limpiarCaja() {
    document.querySelector(`#amigo`).value = '';
}




