const numbers = [2,13,3,7,17,5,11,19,9]
const names = ['Eva', 'Adel', 'Cedric', 'Dior', 'Frank', 'Bob']
const fruits = ['pineapple', 'kiwi', 'banana', 'pear', 'cherry']

function sortByLength(arr){
    return arr.sort((a, b)=>a.length - b.length);
}  //String tömböt a szavak hossza szerint rendezi és a rendezett tömböz adja vissza
function sortByLengthAsc(arr){
    return arr.sort((a, b)=>a.length - b.length ||a.localeCompare(b));

}  //String tömböt a szavak hossza szerint rendezi ABC sorrendbe és a rendezett tömböz adja vissza
function sortFrom15(arr){
    return arr.sort((a, b)=>Math.abs(a-15)- Math.abs(b - 15))

}  //számokat rendez a 15-től való távolság alapján és a rendezett tömböt adja vissza
function addAsterisk(arr){
    return arr.map(item=>`*${item}*`);
}  //String tömb mindegy elemének az elejére és végére egy csillagot tesz és visszaadja a módosított tömböt
function between5And15(arr){
    return arr.filter(num => num >= 5 && num<=15);
}  //számokat tartalmazó tömb 5 és 15 közötti elemeit adja vissza egy tömbben
function isAllOdd(arr){
    return arr.every(num => num % 2 !==0);
}  //számokat tartalmazó tömb minden eleme páratlan-e. Visszatérési érték true vagy false
function hasEven(arr){
    return arr.some(num => num % 2 ===0);
}  //számokat tartalmazó tömb tartalmaz-e páros elemet. Visszatérési érték true vagy false
function sigma(arr){
    return arr.reduce((acc, num) => acc * num, 1);
}   //számokat tartalmazó tömb elemeit összeszorozza és a szorzatot adja vissza 

// Példák a függvények használatára:
console.log('Sort by length:', sortByLength(names)); // Hossz alapján rendezve
console.log('Sort by length (ABC):', sortByLengthAsc(names)); // Hossz és ABC sorrend
console.log('Sort by distance from 15:', sortFrom15(numbers)); // Távolság 15-től
console.log('Add asterisk:', addAsterisk(fruits)); // Csillag hozzáadása
console.log('Numbers between 5 and 15:', between5And15(numbers)); // 5 és 15 közötti számok
console.log('Is all odd:', isAllOdd(numbers)); // Minden szám páratlan?
console.log('Has even number:', hasEven(numbers)); // Van páros szám?
console.log('Sigma (product of numbers):', sigma(numbers)); // Számok szorzata