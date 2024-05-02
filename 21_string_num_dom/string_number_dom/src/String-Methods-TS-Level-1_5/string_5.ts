const whereIsSusi: string = 'Susi is back from codingschool';
const susi2 = whereIsSusi.substring(0, 4);
const is2: string = whereIsSusi.substring(5, 7);
const school2: string = whereIsSusi.substring(24, 30);
const susiIsSchool2: string = whereIsSusi.substring(0, 4).concat(whereIsSusi.substring(4, 8)).concat(whereIsSusi.substring(24, 30));

const susiElement2 = document.querySelector('h1');
if(susiElement2) {
    susiElement2.innerHTML = susi2;
}

const isElement2 = document.querySelector('h2');
if(isElement2) {
    isElement2.innerHTML = is2;
}


const schoolElement2 = document.querySelector('h4');
if(schoolElement2) {
    schoolElement2.innerHTML = school2;
}

const susiIsSchoolElement2 = document.querySelector('h5');
if(susiIsSchoolElement2) {
    susiIsSchoolElement2.innerHTML = susiIsSchool2;
}
    





