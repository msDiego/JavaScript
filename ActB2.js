
var peso = parseFloat(prompt("Introduce tu peso en kilos"));
var altura = parseFloat(prompt("Introduce tu altura en metros"));

calculoIMC (peso, altura);

function calculoIMC(peso, altura){

    let IMC = peso / (altura * altura);
    console.log(IMC)
    if (IMC < 18){
        console.log("Peso bajo!")

    }
    else if( (18 <= IMC) && (IMC < 24.9)){
        console.log("Normal")

    }
    else if ( (25 <= IMC) && (IMC < 26.9)){
        console.log("Sobrepeso")
    }
    else if ( IMC >= 27){
        console.log("Obesidad")
        if ( (27 <= IMC) && (IMC < 29.9)){
            console.log("Obesidad grado 1")
        }
        if ( (30 <= IMC)&& (IMC < 39.9)){
            console.log ("Obesidad grado 2")
        }
        if ( IMC >= 40){
            console.log("Obesidad grado 3")
        }
    }
}

