// Valores
let total = 0;

let pedido = [];

// Comentarios
const comentarios = [
    "¡Oído cocina!",
    "¡Marchando!",
    "Enseguida se lo preparamos.",
    "¡Muy buena elección!",
    "De acuerdo.",
    "Tomo nota."
]

// Número aleatorio
function numAl() {
    return Math.floor(Math.random() * comentarios.length);
}

// Menú deasayuno
const aperitivos = {
    Zumo: 1.70,
    Batido: 1.25,
    Chocolate: 1.50,
    Nada : 0
};

const platosPrincipales = {
    Gofre: 5.00,
    Tortilla: 4.75,
    Crepe: 3.75,
    Torrijas: 4.25,
    Nada: 0
};

const platosSecundarios = {
    Donut: 2.10,
    Tostada: 2.35,
    Helado: 2.75,
    Nada: 0
};

//Menú principal
const primerosPlatos = {
    Ensalada: 8.50,
    Croquetas: 5.25,
    Macarrones: 6.75,
    Risotto: 9.00,
    Nada : 0
};

const segundosPlatos = {
    Solomillo: 15.00,
    Rape: 16.75,
    Sepia: 11.75,
    Cochinillo: 14.50,
    Nada: 0
};

const postres = {
    Flan: 4.00,
    Helado: 3.50,
    Yogur: 2.75,
    Torrijas: 5.25,
    Nada: 0
};

// Funciones
function menu(platos, tipoDePlato, cena = false) {

    let respuesta =  prompt(`${total > 0 ? `${comentarios[numAl()]}\n \n` : ""}`
    + `Escoja un ${tipoDePlato}:\n \n${iterador(platos)} \n \nCuenta: ${total} €`)

    if(capitalizar(respuesta) in platos){
        pedido.push(respuesta.toLowerCase())
        if (!cena) { total += platos[capitalizar(respuesta)] }
        else { total += platos[capitalizar(respuesta)] + 2.50 }
    } else {
        alert("No tenemos eso en el menú.")
        menu(platos, tipoDePlato, cena)
    }
}

function iterador(platos) {
    let resultado = "";
    for (const plato in platos) {
        resultado += (`${plato}   --   ${platos[plato]} €\n`);
    }
    return resultado
}

function capitalizar(palabra) {
    palabra = palabra[0].toUpperCase() + palabra.slice(1);;
    return palabra;
    }

function desayuno() {
    menu(aperitivos, "aperitivo");

    menu(platosPrincipales, "plato principal");

    menu(platosSecundarios, "plato secundario");
}

function comida() {
    menu(primerosPlatos, "primer plato");

    menu(segundosPlatos, "segundo plato");

    menu(postres, "postre");
}

function cena() {
    menu(primerosPlatos, "primer plato", true);
    
    menu(segundosPlatos, "segundo plato", true);

    menu(postres, "postre", true);
}

function tipoMenu() {
    let tipoDeMenu = prompt("¿Qué desea tomar: desayuno, comida o cena?");

    if (tipoDeMenu == "desayuno") {desayuno()}
    else if (tipoDeMenu == "comida") {comida()}
    else if (tipoDeMenu == "cena") {cena()}
    else {
        alert("No tenemos eso en el menú.")
        tipoMenu()
    }
}

// Inicio
alert("Bienvenido a nuestro restaurante.");

tipoMenu();

alert(`Su pedido: ${pedido[0]}, ${pedido[1]} y ${pedido[2]}. \nTotal a pagar: ${total} € \n \nMuchas gracias por su pedido, esperamos verle pronto.`);
