let N = prompt("Введіть чіле число");
function proste(N) {
    if (N === null) {
        console.log(`Ви відмовились вводити число`);
        return;
    }
    if (N <= 1) {
        console.log(`1 не може бути простим числом`);
        return;
    }
    for (let i = 2; i < N; i++) {
        if (N % i === 0) {
            console.log(`Число ${N} не є простим`);
            return;
        }
    }
    console.log(`Число ${N} є простим`);
}

proste(N);
