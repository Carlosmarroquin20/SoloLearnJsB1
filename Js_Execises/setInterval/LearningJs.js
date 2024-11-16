let repeticiones = 0; //el numero de repeticines ahora es 0

function main() {
    console.log("Aprendiendo Js es Divertido");
    repeticiones ++;
    if (repeticiones === 5){
        clearInterval(intervalo);
        console.log("Ya llegamos a 5 repeticiones pa");
    }
}

var intervalo = setInterval(main, 2000);