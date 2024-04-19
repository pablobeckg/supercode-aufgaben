let printValue = document.querySelector('#result');

function formula() {
    const output = Number(document.querySelector("#number").value);
    printValue.innerHTML = output * 2;
}
