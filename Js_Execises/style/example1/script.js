function cambiarEstilos() {
    var elemento = document.getElementById("parrafo");

    elemento.style.color = "blue";

    elemento.style.fontSize = "76px";


    elemento.style.textAlign = "center";
}

function cambiarFondo() {
    var colores = ["red", "purple", "green", "pink"];
    var colorAleatorio = colores[Math.floor(Math.random() *colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}
