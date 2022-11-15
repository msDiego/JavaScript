
var input = prompt("Introduce una cadena de texto:");

console.log(palindromo(input.toLowerCase()));

function palindromo (input){
    let cadena = input.split(" ").join("");
    let cadenaGirada = input.split(" ").join("").split("").reverse().join("");

    if (cadena === cadenaGirada){
        return "Es palíndroma";
    }
    else{
        return "No es palíndroma";
    }


}