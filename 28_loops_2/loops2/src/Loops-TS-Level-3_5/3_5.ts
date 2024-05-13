const numberX = 5;

function factorial(num: number) {
    let fac = 0;
    for (let index = 0; index <= num; index++) {
        if (index == 0) {
            fac += 1
        } else {
            fac *= index;
        }
    }
    return fac;
}

console.log(factorial(numberX));;