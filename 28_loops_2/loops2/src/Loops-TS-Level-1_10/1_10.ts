const numbers: number[] = [2, 5, 18, 27, 54];
const numbers2: number[] = [99, 50, 23, 47, 82];
const numbers3: number[] = [9, 5, 23, 47, 2];

function getHighestNumber(arr: number[]) {
    let highest = arr[0];
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] > highest) {
            highest = arr[index];
        }
    }
    console.log(highest);
}

getHighestNumber(numbers);
getHighestNumber(numbers2);
getHighestNumber(numbers3);