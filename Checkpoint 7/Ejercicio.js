function miFuncion(arg1, arg2, arg3, arg4) {
    var resultado = (arg1 + arg2) * (arg3 + arg4);
    
    if (resultado > 50) {
        console.log("¡El número es mayor que 50!");
    } else if (resultado < 50) {
        console.log("¡El número es inferior a 50!");
    } else {
        console.log("¡El número es 50!");
    }
}