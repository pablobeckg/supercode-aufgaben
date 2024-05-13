function calculateSum(maxNumber: number) {
    let sum = 0;
    for (let index = 1; index <= maxNumber; index++) {
        sum += index;
    }
    console.log(sum);
}

calculateSum(10)