let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

function numAscending(a: number, b: number) {
return a - b;
}

console.log(numArray1.sort(numAscending))
console.log(numArray1.sort(numAscending).reverse())
