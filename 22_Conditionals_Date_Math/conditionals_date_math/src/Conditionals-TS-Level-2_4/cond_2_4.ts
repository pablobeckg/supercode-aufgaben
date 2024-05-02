const randomNumber = Math.ceil(Math.random() * 77);
const randomNumber2 = Math.ceil(Math.random() * 77);

console.log('If statement');
if (randomNumber == randomNumber2) {
    console.log('Was für ein Zufall');
} else if (randomNumber > randomNumber2) {
    console.log('Erste Zahl größer');
} else {
    console.log('Zweite Zahl größer');
};

console.log('Switch statement');

switch (true) {
    case randomNumber == randomNumber2:
        console.log('Was für ein Zufall');
        break;
    case randomNumber > randomNumber2:
        console.log('Erste Zahl größer');
        break;
    default:
        console.log('Zweite Zahl größer');
        break;
}


