let numeroCorrecto = 7;
let adivinado = false;

while (!adivinado) {
    let intento = parseInt(prompt("Adivina el numero entre 1 y 100: "));

    if (intento === numeroCorrecto) {
        console.log("Correcto , Ganaste!! El numero oculto es el: " + numeroCorrecto);
        adivinado = true;
    } else {
        console.log("Intentalo de nuevo!!");
    }
}