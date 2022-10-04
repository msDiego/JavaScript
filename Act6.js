var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B',
    'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var DNI = "43226225"

console.log(DNI.length)

if (DNI > 0 && DNI < 99999999 && DNI.length == 8) {
    letraDNI(letras, DNI);
}
else {
    console.log("El número proprocionado no es correcto")
}

function letraDNI(letras, DNI) {

    console.log("La letra del DNI es " + letras[DNI % 23]);
}