
dosNumeros();
tresNumeros();

function dosNumeros() {
    let numero1 = parseInt(prompt("Introduce el primer número:"));
    let numero2 = parseInt(prompt("Introduce el segundo número:"));

    if (numero1 == numero2) {
        console.log("Los números son iguales")
    }
    else if (numero1 < numero2) {
        console.log("El número más grande es: " + numero2)
    }
    else {
        console.log("El número más grande es: " + numero1);
    }
}

function tresNumeros() {

    let numero1 = parseInt(prompt("Introduce el primer número:"));
    let numero2 = parseInt(prompt("Introduce el segundo número:"));
    let numero3 = parseInt(prompt("Introduce el tercer número:"));

    if ( (numero1 == numero2) && (numero2 == numero3) ) {
        console.log("Los números son iguales")
    }

    else if ( (numero1 < numero2) && (numero1 < numero3) ){
        console.log("El número más pequeño es: " + numero1);
    }

    else if ((numero2 < numero1) && (numero2 < numero3) ) { 
        console.log("El número más pequeño es: " + numero2);
    }

    else if ((numero3 < numero1) && (numero3 < numero2)){
        console.log("El número más pequeño es: " + numero3);

    }
    
}