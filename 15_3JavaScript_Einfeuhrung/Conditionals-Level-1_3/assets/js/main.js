const output = document.querySelector('#result');

function adult(event) {
   event.preventDefault();
   const ageInput = document.querySelector('#alter').value;
   if (ageInput >= 18) {
      output.innerHTML = 'Ja, Du kannst Shisha rauchen';
   } else {
      output.innerHTML = 'Du darfst noch nicht Shisha rauchen';
   }
   console.log ('hola');
}
