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

// Menú
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
function menu(platos, tipoDePlato) {

    let respuesta =  prompt(`${total > 0 ? `${comentarios[numAl()]}\n \n` : ""}`
    + `Escoja un ${tipoDePlato}:\n \n${iterador(platos)} \n \nCuenta: ${total} €`)

    if(respuesta in platos){
        pedido.push(respuesta.toLowerCase())
        total += platos[respuesta]
    } else {
        alert("No tenemos eso en el menú.")
        menu(platos)
    }
}

function iterador(platos) {
    let resultado = "";
    for (const plato in platos) {
        resultado += (`${plato}   --   ${platos[plato]} €\n`);
    }
    return resultado
}

// Inicio
alert("Bienvenido a nuestro restaurante.");

menu(primerosPlatos, "primer plato");

menu(segundosPlatos, "segundo plato");

menu(postres, "postre");

alert(`Su pedido: ${pedido[0]}, ${pedido[1]} y ${pedido[2]} \nTotal a pagar: ${total}€ \n \nMuchas gracias por su pedido, esperamos verle pronto.`)