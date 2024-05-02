const susisJob: string = "Sam is working at codingschool";
const sam: string = susisJob.substr(0, 3);
const is3: string = susisJob.substr(4, 2);
const isAtSchool: string = is3.concat(susisJob.substr(14, 4).concat(susisJob.substr(24, 8)));
const samWorksAtSchool: string = sam + ' works' + isAtSchool.substr(2,10)

document.open();
document.write(sam + "<br>" + is3 + "<br>" + isAtSchool +"<br>" + samWorksAtSchool);
document.close();