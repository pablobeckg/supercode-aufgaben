let checkNumber: number[] = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];

// const dividedBy3 = checkNumber.map(numberBy3 => {
//     if (numberBy3 % 3 == 0) {
//         return numberBy3 + 100;
//     } else {
//     return numberBy3;
//     }
// });

const dividedBy3 = checkNumber.map(number => number % 3 === 0 ? number + 100 : number);
console.log(dividedBy3);