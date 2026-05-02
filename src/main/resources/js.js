var hoy = new Date();
document.getElementById('fecha').valueAsDate = hoy;

// Contador para el flujo principal
var contadorPrincipal = 3;

function agregarFila() {
    var tbody = document.getElementById('flujo-principal');
    var fila = document.createElement('tr');
    fila.innerHTML =
        '<td>' + contadorPrincipal + '</td>' +
        '<td><input type="text" placeholder="" /></td>' +
        '<td><input type="text" placeholder="" /></td>';
    tbody.appendChild(fila);
    contadorPrincipal++;
}

var contadorAlt = 2;

function agregarFilaAlt() {
    var tbody = document.getElementById('flujo-alternativo');
    var fila = document.createElement('tr');
    fila.innerHTML =
        '<td>A' + contadorAlt + '</td>' +
        '<td><input type="text" placeholder="" /></td>' +
        '<td><input type="text" placeholder="" /></td>';
    tbody.appendChild(fila);
    contadorAlt++;
}