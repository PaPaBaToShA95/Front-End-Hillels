const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, currentValue) => {
    return acc + currentValue;
}, 0);

console.log(sum);

const words = ['Hello', 'world', 'this', 'is', 'JavaScript'];
const sumWords = words.reduce((acc, currentValue) => {
    return acc + currentValue + ` `;
}, ``);
word = sumWords.trim()
console.log(word)

const numbers = [5, 12, 8, 130, 44];

const numb = numbers.reduce((acc, currentValue) => {
    if
        (acc < currentValue)
        return currentValue;
    else
        return acc;
})
console.log(numb)

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const countFruits = fruits.reduce((acc, currentValue) => {
    if (currentValue in acc) {
        acc[currentValue] += 1;

    }
    else {
        acc[currentValue] = 1
    }
    return acc;
}, {})
console.log(countFruits)



const numbers = [1, 2, 3, 4];
const multNumb = numbers.reduce((acc, currentValue) => {
    return acc * currentValue;
}, 1);
console.log(multNumb)












