function Calculator() {
    this.add = function (a, b) {
        return a + b;
    };

    this.subtract = function (a, b) {
        return a - b;
    };

    this.multiply = function (a, b) {
        return a * b;
    };

    this.divide = function (a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Помилка: ділення на нуль!";
        }
    };
}

const calc = new Calculator();

console.log(calc.add(5, 3)); 
console.log(calc.subtract(10, 4));
console.log(calc.multiply(3, 6)); 
console.log(calc.divide(8, 2)); 



// Не знаю чи це дуже чесно з мого боку, але в попередній 16 лекції цей код вже був, я його трохи підправив і власне готово)
