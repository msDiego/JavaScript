var valores = [true, 5, false, "hola", "adios", 2];

primeraParte(valores);
segundaParte(valores);
terceraParte(valores);


function primeraParte(valores) {

    let mayor = "";

    for (let i = 0; i < valores.length; i++) {
        if (typeof (valores[i]) == "string" && valores[i].length > mayor.length) {
            mayor = valores[i];
        }
    }

    console.log("El string de mayor longitud es " + mayor);

}

function segundaParte(valores) {

    let booleanos = [];

    for (let i = 0; i < valores.length; i++) {
        if (typeof (valores[i]) == "boolean") {
            booleanos.push(valores[i]);
        }
    }

    if (booleanos.length > 1){

        for (let j = 0; j < booleanos.length - 1; j++){
            console.log (booleanos[j] == booleanos[j + 1]);
            console.log (booleanos[j] != booleanos [j + 1]);
        }

    }

    else{
        console.log(!valores[0], valores[0]);
    }

}

function terceraParte(valores){

    let numeros = []

    for (let i = 0; i < valores.length; i++) {
        if (typeof (valores[i]) == "number") {
            numeros.push(valores[i]);
        }
    }

    if (numeros.length > 1){

        for (let j = 0; j < numeros.length - 1; j++){
            console.log (numeros[j] + numeros[j + 1]);
            console.log(numeros[j] - numeros[j + 1]);
            console.log(numeros[j] * numeros[j + 1]);
            console.log(numeros[j] / numeros[j + 1]);
            console.log(numeros[j] % numeros[j + 1]);
        }

    }

    else{
        console.log("Solo hay un número");
    }

}
