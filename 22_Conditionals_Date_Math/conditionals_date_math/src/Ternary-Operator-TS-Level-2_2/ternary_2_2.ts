let isOnline = Math.random() < 0.5;
let isPremiumUser = Math.random() < 0.5;
let isAdult = Math.random() < 0.5;

let onlineStatus = isOnline ? 'online' : 'offline';
console.log(onlineStatus)
let monthlyFee = isPremiumUser ? 12.99 : 19.99;
console.log(monthlyFee);
let adultOrNot = isAdult ? window.confirm('Willkommen') : window.alert('Keine Berechtigung');

let randomAge = Math.floor(Math.random() * 121);
let randomSalary = Math.floor(Math.random() * 15001);

let isMiddleAged = randomAge >= 40 && randomAge <= 65 ? true : false;

console.log(isMiddleAged);

let salaryMessage = randomSalary > 10000 ? 'You are rich' : randomSalary > 1500 ? 'Not too bad' : 'Not that much';
console.log(salaryMessage);


