
var base = 10;
var extra = 15;

var horas = parseFloat(prompt("Introduce las horas trabajadas en la última semana: "));
var extras = parseFloat(prompt("Introduce la cantidad de horas extras realizadas, en el caso de que se hayan realizado: "));

var salario = horas * base + extra * extras;

console.log("El salario total es de: " + salario);