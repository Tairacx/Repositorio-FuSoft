// Seleccionamos la pantalla

const pantalla = document.getElementById('pantalla');

// funcion para agregar número y operaciones a la pantalla

function agregar(valor) {
    pantalla.value += valor;
}

function Limpiar() {
    pantalla.value = '';
}

// funcion para borrar el ultimo numero o operacion de la pantalla "slice es para cortar el string y -1 es para eliminar el ultimo caracter"

function borrarUno() {
    pantalla.value = pantalla.value.slice(0, -1);
}

function calcular() {
    try {pantalla.value = eval (pantalla.value);
    } catch (error) {pantalla.value = 'Error';
    setTimeout(() => Limpiar (), 1500);
    }
}

function potencia() {
    let pantalla = document.getElementById("pantalla");
    pantalla.value = Math.pow(pantalla.value, 2);
}

function raiz() {
    let pantalla = document.getElementById("pantalla");
    pantalla.value = Math.sqrt(pantalla.value);
}

function porcentaje() {
    let pantalla = document.getElementById("pantalla");
    pantalla.value = pantalla.value / 100;
}