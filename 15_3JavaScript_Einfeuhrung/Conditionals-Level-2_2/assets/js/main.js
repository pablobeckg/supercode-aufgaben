const outputOne = document.querySelector('#concern');
const outputTwo = document.querySelector('#effect');

function tellWeather() {
    const wetterSlider = document.querySelector('#slider').value;
    const slideNumber = document.querySelector('#slideNumber');
    slideNumber.innerHTML = `Luftqualität: ${wetterSlider}`;
    outputOne.innerHTML = wetterSlider;
    if (wetterSlider <= 150 && wetterSlider > 120) {
        outputOne.innerHTML = 'Level of concern: Unhealthy for sensitive groups';
        outputTwo.innerHTML = 'Level of health effect: General public not likely affected';
        document.querySelector('body').style.backgroundColor = 'red';
    } else if (wetterSlider <= 120 && wetterSlider > 55) {
        outputOne.innerHTML = 'Level of concern: Moderate';
        outputTwo.innerHTML = 'Level of health effect: Acceptable quality';
        document.querySelector('body').style.backgroundColor = 'yellow';
    } else if (wetterSlider <= 55 && wetterSlider >= 0) {
        outputOne.innerHTML = 'Level of concern: Good';
        outputTwo.innerHTML = 'Level of health effect: Little or no risk';
        document.querySelector('body').style.backgroundColor = 'green';
    }
}
