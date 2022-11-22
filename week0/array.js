const myArray = [1, 10, 3, 6, 'ArrayElement'];

/* 1) */
console.log(myArray[3])
console.log(myArray[6])

/* 2) .forEach */

myArray.forEach(e => console.log(typeof e));

/* 3) Boolean */

function numberOrNot(element){
    return typeof element === "number"
}

const isNumber = myArray.every(numberOrNot)

console.log(isNumber)

/* 4) element is bigger than 5 */

function isBiggerThanFive (number){
    return number > 5
}
console.log(myArray.some(isBiggerThanFive))

/* 5) Create another variable that will include only elements that bigger than 5 */

console.log(myArray.filter(isBiggerThanFive))

/* 6) Multiply numbers of Array by 2 */
function findString(value) {
    return typeof value === "number";
}
const new_arr = myArray.filter(findString).map((num) => num * 2);
console.log(new_arr)

/* 7 Array sum */
let result = myArray.reduce(function(sum,current){
    return sum + current;
},0);
console.log(result)
/* 8) Sort array in ascending and descending order */

function asc(a,b){
    if(a > b) return 1
    if(a < b) return -1
}
function desc(a,b){
    if(a > b) return -1
    if(a < b) return 1
}
console.log(myArray.sort(asc))
console.log(myArray.sort(desc))
