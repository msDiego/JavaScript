
var input = "ala";

console.log(palindromo(input));

function palindromo (input){
    let cadena = input.split("");
    let cadenaGirada = input.split("").reverse();

    console.log(cadena);
    console.log(cadenaGirada);

    if (cadena === cadenaGirada){
        return "Es palíndroma";
    }
    else{
        return "No es palíndroma";
    }


}