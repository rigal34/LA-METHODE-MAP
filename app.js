let arrayNumber = [4, 74, 28, 12, 1];
let arrayNumberDouble = [8, 148, 56, 24, 2];
const numbers = [1, 50, 41, 89];
const nombres = [2, 51, 42, 90];



console.log(arrayNumber);
console.log(arrayNumberDouble);



arrayNumber.map((bruno) => console.log(bruno));
arrayNumber.map((bruno) => (document.body.innerHTML += bruno));
arrayNumber.map((bruno) => (document.body.innerHTML += `<li> ${bruno} </li> `))





document.body.innerHTML = arrayNumberDouble
.map((rigal) => `<li> ${rigal}</li>`)
.join("");

///////////////////////////////////////////////////////////////////////////////////////

const mapMultiplier = numbers.map(nombre => nombre * 2);
console.log(mapMultiplier);

///////////////////////////////////////////////////////////////////////////////////////

const multiplier = nombres.map((numb, index) => {

console.log(index);

return numb *2;

});

console.log(multiplier);

///////////////////////////////////////////////////////////////////////////////////////

const laFoule = [
    {name: "Victor", id: 1},
    {name: "Léa", id: 2},
    {name: "Jules", id: 3},
    {name: "Alexandre", id: 4},
    {name: "Simon", id: 5},
    {name: "Bastien", id: 6},
]

const lePeuple = laFoule.map(objet => objet.name)

console.log(lePeuple);

////////////////////////////////////////////////////////////////////////////////////////


//il ne faut pas toujours utiliser la méthode map pour cet exemple du dessous


const results = [true, false, false, true];

const resultsArr = results.map(solution => console.log(solution))
console.log(resultsArr);
//pour ce type de configuration vaut mieux plutôt utiliser forEach


results.forEach(solution => console.log(solution));

//LA MÉTHODE MAP EST UTILIÉE AVEC LES FRAMWORK PUISQUE L'ON PEU METTRE DES ÉLÉMENTS DANS DES TABLEAUX QUE L'ON RETOURNE ET ENSUITE ON PEUT LES 
//AFFICHER SOUS FORME DE LISTES... 






