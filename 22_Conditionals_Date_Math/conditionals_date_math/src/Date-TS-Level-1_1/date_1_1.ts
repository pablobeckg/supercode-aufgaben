let date1 = new Date("September 2, 2019 09:00:00");
let date2 = new Date(0);
let date3 = new Date(31556908800);
let date4 = new Date(86400000);


let h1Element = document.querySelector('h1');
if (h1Element) {
    h1Element.innerHTML = date1.toString();
}

let h2Element = document.querySelector('h2');
if (h2Element) {
    h2Element.innerHTML = date2.toString();
}

let h3Element = document.querySelector('h3');
if (h3Element) {
    h3Element.innerHTML = date3.toString();
}

let h4Element = document.querySelector('h4');
if (h4Element) {
    h4Element.innerHTML = date4.toString();
}



