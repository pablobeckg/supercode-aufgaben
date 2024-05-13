const texto = 'Hola como estas'
const texto2 = 'Me gusta mucho las palomitas'
const vowels: string[] = ['a', 'e', 'i', 'o', 'u']

function getNumberOfVowels(str: string, arr: string[]) {
    let count = 0;
    const splitted = str.split('');
    for (let i = 0; i < arr.length; i++) {
        for (let index = 0; index < splitted.length; index++) {
            if(splitted[index] == arr[i]) {
                count++
            }
        }
    }  
    console.log(count)
}

getNumberOfVowels(texto, vowels);
getNumberOfVowels(texto2, vowels);