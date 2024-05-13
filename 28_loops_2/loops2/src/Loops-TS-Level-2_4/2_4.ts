function addToFifty(): void {
    let sum = 0;
    while (sum <= 50) {
        let randomNumber = Math.ceil(Math.random()*10);
        console.log('The random number is: ' + randomNumber);
        sum += randomNumber;
        console.log('and the sum is: ' + sum);
    }
}

addToFifty()