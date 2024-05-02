const samsStatus = "Sam is good at codingschool";
const badSchool = samsStatus.replace('good at codingschool', 'bad at school');
const goodSchool = samsStatus.replace('good at codingschool', 'good at school');
const goodTennis = samsStatus.replace('good at codingschool', 'good at tennis');

document.open();
document.write(badSchool + "<br>" + goodSchool + "<br>" + goodTennis);
document.close();