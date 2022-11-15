
const cyclist_team = {

    team: "alfa-lum-1984",
    cyclists: [
        {
        name: "Juan Alonso",
        born: "8/01/1958",
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
exercise02(); */
exercise03();

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

function exercise03 (){

    //saca la lista de los nombres ordenada por altura, de los más altos a los más bajos.

    let cyclists = cyclist_team.cyclists.map( function (element){ return { name: element.name, height: element.height} });

    let heights = cyclists.map( function (element){ return element.height} ).sort( (a, b) => b - a );

    let names = [];

    for (let i = 0; i < heights.length; i++){

        cyclists.forEach (function (element) {

                if (element.height == heights[i]){
                    names.push({name: element.name, height: heights[i]})
                }

            })

    }

    console.log(names);

}