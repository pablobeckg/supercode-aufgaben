let printValue = document.querySelector('#result');

function formula() {
    const inputNumberOne = Number(document.querySelector("#age-1").value);
    const inputNumberTwo = Number(document.querySelector("#age-2").value);
    const difference =  Math.abs(inputNumberOne - inputNumberTwo)
    printValue.innerHTML = `Die Diferenz ist : ${difference}`
}
