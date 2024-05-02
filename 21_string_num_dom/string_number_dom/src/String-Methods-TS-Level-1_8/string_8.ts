const whereIsSam = "Sam is going to school";
const samToUpper = whereIsSam.toUpperCase();
const samToLower = whereIsSam.toLowerCase();
const samAndSchool = samToUpper.replace('IS GOING TO', samToLower.slice(4,15));
const samIsGoingTo = samToLower.replace('is going to', samToUpper.slice(4,15));
const samCapital = whereIsSam.replace(whereIsSam[4], whereIsSam[4].toUpperCase()).replace(whereIsSam[7], whereIsSam[7].toUpperCase()).replace(whereIsSam[13], whereIsSam[13].toUpperCase()).replace('school', 'School');

document.open();
document.write(whereIsSam + "<br>" + samToUpper + "<br>" + samToLower + '<br>' + samAndSchool + '<br>' + samIsGoingTo  + '<br>' + whereIsSam);
document.close();