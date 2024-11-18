function modificarDOM() {
    var titulo = document.getElementById("titulo");
    titulo.innerHTML = "Texto Modificado";

    var parrafo = document.getElementById("parrafo");
    parrafo.style.color = "pink";
}

function agregarParrafo(){
    var contenedor = document.getElementById("contenedor");

    var nuevoParrafo = document.createElement("p");
    nuevoParrafo.innerHTML = "Este es el nuevo parrafo";

    contenedor.appendChild(nuevoParrafo);
}