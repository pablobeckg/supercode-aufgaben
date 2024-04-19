let printValue = document.querySelector('#result');

function formula() {
    const inputNumber = Number(document.querySelector("#number").value);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const myAge = currentYear - inputNumber;
    printValue.innerHTML = myAge;
}
