function createSum() {
  let sumary = 0;
  return function (num) {
    sumary += num;
    return sumary;
  };
}

const sum = createSum();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7)); 
