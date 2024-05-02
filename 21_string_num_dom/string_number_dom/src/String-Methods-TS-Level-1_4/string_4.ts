const susiStatus: string = 'Susi is going to codingschool';

const susi: string = susiStatus.slice(0, 4);
const is: string = susiStatus.slice(5, 7);
const isGoingToSchool: string = susiStatus.slice(5, 17).concat(susiStatus.slice(23, 29));
const school: string = susiStatus.slice(23, 29);
const susiIsSchool: string = susiStatus.slice(0, 4).concat(susiStatus.slice(4, 8)).concat(susiStatus.slice(23, 29));

const susiElement = document.querySelector('h1');
if(susiElement) {
    susiElement.innerHTML = susi;
}

const isElement = document.querySelector('h2');
if(isElement) {
    isElement.innerHTML = is;
}

const isGoingToSchoolElement = document.querySelector('h3');
if(isGoingToSchoolElement) {
    isGoingToSchoolElement.innerHTML = isGoingToSchool;
}

const schoolElement = document.querySelector('h4');
if(schoolElement) {
    schoolElement.innerHTML = school;
}

const susiIsSchoolElement = document.querySelector('h5');
if(susiIsSchoolElement) {
    susiIsSchoolElement.innerHTML = susiIsSchool;
}
    





