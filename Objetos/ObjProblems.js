
const cyclist_team = {

    team: "alfa-lum-1984",
    cyclists: [
        {
        name: "Juan Alonso",
        born: "08/01/1958",
        height: 1.92,
        tours: 0,
        wins: 12,
        },
        {
        name: "Josh Pantano",
        born: "25/10/2000",
        height: 1.84,
        tours: 3,
        wins: 3,
        },
        {
         name: "Bid Seville",
         born: "12/07/1993",
         height: 1.72,
         tours: 0,
         wins: 1,
        },
        {
        name: "Otto Verdes",
        born: "19/02/1979",
        height: 1.92,
        tours: 0,
        wins: 1,
        },
        {
        name: "Bert Poel",
        born: "03/06/1995",
        height: 1.99,
        tours: 1,
        wins: 2,
        }
    ]

}

/*exercise01();
exercise02();
exercise03();
exercise04();
exercise05(); */
exercise06()


function exercise01 (){

    //Imprime los nombres de los ciclistas, según el orden natural del array

    let names = "" +cyclist_team.cyclists.map( function (element){ return element.name });

    console.log(names);

}

function exercise02 (){

    //Imprime los nombres de los ciclistas ordenados alfabéticamente.

    let sortedNames = cyclist_team.cyclists.map( function (element){ return element.name });

    console.log("" + sortedNames.sort());
}

function exercise03 () {

    //saca la lista de los nombres ordenada por altura, de los más altos a los más bajos.

    cyclist_team.cyclists.sort((a,b) =>  b.height - a.height).forEach(function(element)
    {console.log(element.height + " " + element.name)})


}

function exercise04 (){

    /* Ordena de peor a mejor, teniendo en
    cuenta que el mejor ciclista es el que tiene más tours, y si empatan a tours, es mejor el
    que tiene más wins. Imprime los nombres ordenados y también el número de tours y
    de wins. */

    function sorted(a, b){

        if (a.tours < b.tours){
            return 1;
        }
        else if (a.tours === b.tours && a.wins < b.wins){
            return 1;
        }
        else if (a.tours === b.tours && b.wins < a.wins){
            return -1;
        }
        else{
            return -1;
        }

    }

    console.log( cyclist_team.cyclists.sort((a,b) => sorted(a,b) ))

}

function exercise05(){
    //Utiliza map() para añadir un tour a todos los ciclistas.

    let plusTour = cyclist_team.cyclists.map(function(e){ e.tours++; return e})

    console.log(plusTour)
}

function exercise06(){

    //Utiliza filter() para eliminar todos los ciclistas menores de 30 años

    let age = new Date();
    age.setUTCFullYear( age.getFullYear() - 30);

    let oldersOnly = cyclist_team.cyclists.filter( function (e){

        let dates = e.born.split("/");

        let born = new Date(dates[2]+"-"+dates[1]+"-"+dates[0]);

        let today = Date.now();

        if (today - born.getTime() < age.getTime()){

            return true;
        }

    })


}

function exercise07(){

}

function exercise08(){

}

function exercise09(){

}

