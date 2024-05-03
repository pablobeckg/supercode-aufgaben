function meinAlter(birthyear: number): number {
    const myAge = 2024 - birthyear;
    return myAge;
}

const pabloAge = meinAlter(1989);
const juanAge = meinAlter(1977);

function compareAge(alter1: number, alter2: number): number {
    
    const altersDifferenz = alter1 - alter2;
    return Math.abs(altersDifferenz);
}

const pabloJuanAge: number = compareAge(pabloAge, juanAge);

console.log(pabloJuanAge);