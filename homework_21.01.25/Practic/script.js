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


const numbers = [1, 2, 2, 3, 4, 4, 4, 5, 6, 6, 6, 6];

// Очікуваний результат: {1: 1, 2: 2, 3: 1, 4: 3, 5: 1, 6: 4}
const num = numbers.reduce((acc, currentValue) => {
    if (currentValue in acc) {
        acc[currentValue] += 1;
    }
    else {
        acc[currentValue] = 1
    }
    return acc;
}, {})
num

const cart = [
    { price: 100, quantity: 2 },
    { price: 50, quantity: 1 },
    { price: 20, quantity: 4 },
];

// Очікуваний результат: 330

const totalPrice = cart.reduce((acc, currentValue) => {
    acc += currentValue.price * currentValue.quantity;
    return acc;
}, 0);
totalPrice;


const sentence = "JavaScript is amazing";

// Очікуваний результат: 7 (голосні: a, a, i, i, a, a, i)

const liters = sentence.split("").reduce((acc, currentValue) => {
    if ('aeiouAEIOU'.includes(currentValue)) {
        acc += 1;
    }
    return acc;
}, 0);

liters









