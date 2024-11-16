let contador = 1;

function contar(){
    console.log("Numero actual: " + contador);
    if (contador === 10) {
        clearInterval(intervalo)
        console.log("LISTO!!! Llegue a Diez")
    }
    contador++;
}

let intervalo = setInterval(contar, 1000)
