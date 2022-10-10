var numero1 = ParseInt(prompt("Introduce primer número"));
var numero2 = ParseInt(prompt("Introduce segundo número"));


if (numero1 <= numero2) {
    console.log("numero1 no es mayor que numero2");
}

if (numero2 >= 0) {
    console.log("numero2 es positivo");
}

if ( numero1 < 0 ) {
    console.log("numero1 es negativo y distinto de cero");
}

if ( ++numero1 < numero2) {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

