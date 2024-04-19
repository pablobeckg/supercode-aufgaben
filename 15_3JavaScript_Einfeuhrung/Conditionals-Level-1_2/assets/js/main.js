const output = document.querySelector('#result');

function adult() {
   const numberInput = document.querySelector('#wetter').value;
   if (numberInput < 11 && numberInput >= 8) {
      output.innerHTML = 'Super';
   } else if (numberInput >= 6) {
      output.innerHTML = 'Gut';
   } else if (numberInput >= 3) {
      output.innerHTML = 'okay';
   } else {
      output.innerHTML = 'Schlecht';
   }
}
