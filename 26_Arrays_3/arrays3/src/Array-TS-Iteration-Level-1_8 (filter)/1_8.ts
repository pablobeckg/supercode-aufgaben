const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNum = zahlen.filter(filNum => {
//     if (filNum % 2 == 0) {
//         return filNum
//     }
// })

// const oddNum = zahlen.filter(filNum => {
//     if (filNum % 2 !== 0) {
//         return filNum
//     }
// })

// console.log(evenNum);
// console.log(oddNum);

function printEvenNumbers(arr:number[]) {
    return arr.filter(num => num % 2 === 0);
}

function printOddNumbers(arr2:number[]) {
    return arr2.filter(num => num % 2 !== 0);
}

console.log(printEvenNumbers(zahlen));
console.log(printOddNumbers(zahlen));