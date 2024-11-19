function iniciarAnimacion(){
    var cuadrado = document.getElementById('cuadrado');
    var posicion = 0;

    var intervalo = setInterval(function (){
        if (posicion >= 600) {
            clearInterval(intervalo);
        } else {
            posicion++;
            cuadrado.style.left = posicion + "px";
        }
    }, 80);
} 