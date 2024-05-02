import { differenceInYears, differenceInHours, differenceInSeconds, format } from 'date-fns';
const dateN = new Date(0);
const now = new Date();

// Unterschiede in Jahren, Stunden und Sekunden berechnen
const diffYears = differenceInYears(now, dateN);
const diffHours = differenceInHours(now, dateN);
const diffSeconds = differenceInSeconds(now, dateN);

console.log("Difference in years:", diffYears);
console.log("Difference in hours:", diffHours);
console.log("Difference in seconds:", diffSeconds);

const myBirthday = new Date(1989, 11, 26); 

const currentAge = differenceInYears(now, myBirthday);
const ageAt2007 = differenceInYears(new Date(2007, 3, 7), myBirthday);

console.log("Current age:", currentAge);
console.log("Age on 07.04.2007:", ageAt2007);

const formattedBirthday1 = format(myBirthday, "dd.MM.yyyy HH:mm:ss");
const formattedBirthday2 = format(myBirthday, "dd.MM.yyyy HH:mm");
const formattedBirthday3 = format(myBirthday, "dd.MM.yy");
const formattedBirthday4 = format(myBirthday, "dd. MMMM yyyy");
const formattedBirthday5 = format(myBirthday, "HH:mm");
const formattedBirthday6 = format(myBirthday, "EEEE");
const formattedBirthday7 = format(myBirthday, "MMMM");
const formattedBirthday8 = format(myBirthday, "dd 'des' MMMM 'im Jahre des Herrn' yyyy");

console.log(formattedBirthday1);
console.log(formattedBirthday2);
console.log(formattedBirthday3);
console.log(formattedBirthday4);
console.log(formattedBirthday5);
console.log(formattedBirthday6);
console.log(formattedBirthday7);
console.log(formattedBirthday8);