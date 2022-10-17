
var input = prompt("Introduce una cadena de texto:");


console.log(cadena(input));

function cadena (input){

    for (let i = 0; i < input.length; i++){
        if (input.toUpperCase() == input){
            return "La cadena es en mayúscula";
        }
        else if (input.toLowerCase() == input){
            return "La cadena es en minúscula";
        }
        else{
            return "La cadena está mezclada";
        }
    }
}