/*
1) Function that accepts your firstName and lastName
Should return 'I'm firstName lastName'
*/
function sayWho() {
    let firstName = prompt('What is your First name', '')
    let lastName = prompt('What is your Last name', '')
    return 'I\'m' + ' ' + firstName + ' ' + lastName
}
console.log(sayWho());

/*
2) Function that accepts numbers and return their sum
*/
function countSum() {
    let count = 0
    for(let i = 0; i < arguments.length; i++){
        count += arguments[i]
    }
    return count
}
console.log(countSum(4, 5, 23));
console.log(countSum(10, 50, 212, 300, 22));
console.log(countSum(1, 2));

/*
3) Function that count number of letters in provided string
(The task says about the line) (Not about two lines =) )
*/
function countLetters(string, letter) {
    let result = string.split('')
    let count = 0
    for(let i = 0; i <= result.length; i++){
        if(result[i] === letter){
            count += 1
        }
    }
    return count
}
console.log(countLetters('Node developer', 'd'))

/*
4. Write function that will return random integer in range that you provided
 */

function getRandom(start, end) {
    return result;
}

function getRandom(start, end) {
    let start1 = prompt('Input first digit', '')
    let end1 = prompt('Input second digit', '')
    start1 = Math.ceil(start1)
    end1 = Math.floor(end1)
    return Math.floor(Math.random() * (end1 - start1 + 1)) + start1
}
console.log(getRandom(0, 10))
console.log(getRandom(90, 200))
