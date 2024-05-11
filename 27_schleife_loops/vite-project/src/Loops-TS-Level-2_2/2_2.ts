const numInput = document.querySelector('#number_input') as HTMLInputElement;
const bttn = document.querySelector('#loop_bttn');
let text = document.querySelector('p')!;

if (numInput && bttn && text) {
    bttn.addEventListener('click', () => {
        let numInputVal = parseInt(numInput.value);
        
        for (let index = 1; index <= numInputVal; index++) {
           text.textContent = 'L' + 'o'.repeat(index) + 'p';
        }
    });
}
