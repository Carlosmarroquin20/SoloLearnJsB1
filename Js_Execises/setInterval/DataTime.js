function mostrarhora() {
    var ahora = new Date();
    console.log("Hora actual: " + ahora.toLocaleTimeString());
}

setInterval(mostrarhora, 5000);