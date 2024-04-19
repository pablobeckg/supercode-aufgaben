const output = document.querySelector('#result');

function adult() {
   const ageInput = document.querySelector('#alter').value;
   if (ageInput >= 18) {
      output.innerHTML = 'Volljährig';
   } else {
      output.innerHTML = 'Minderjährig';
   }
}
