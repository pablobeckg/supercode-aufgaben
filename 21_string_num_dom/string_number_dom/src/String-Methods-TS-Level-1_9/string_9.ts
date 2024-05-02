const infoAboutSam = "Sam is going to codingschool";
const susi3 = "Susi";
const and = "and";

const samIsGoing = infoAboutSam.slice(0,13).concat('to school ').concat(and).concat(' to the movie theater');
const samIsGoing2 = infoAboutSam.slice(0,16).concat('the movie theater');
const susiAndSam = susi3 + ' ' + and + ' ' + samIsGoing.replace('is', 'are').slice(0, 23);
const susiAndSam2 = susi3 + ' ' + and + ' ' + samIsGoing.replace('is', 'are').replace('school', 'gym');
const susi4 = samIsGoing.replace('Sam', 'Susi')
console.log(susi4);

document.open();
document.write(samIsGoing + "<br>" + samIsGoing2 + "<br>" + susiAndSam + '<br>' + susiAndSam2 + '<br>' + susi4);
document.close();