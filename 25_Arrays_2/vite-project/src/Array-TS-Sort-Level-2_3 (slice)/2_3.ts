const oldPainters:string[] = ["Caspar David Friedrich", "Mary Cassatt", "Rosa Bonheur", "Francisco de Goya", "Édouard Manet"];
const newerPainters:string[] = ["Pablo Picasso", "Salvador Dalí", "Frida Kahlo", "Georgia O'Keeffe"];

const femalePainters = oldPainters.slice(1, 3).concat(newerPainters.slice(2, 4));
const malePainters = oldPainters.slice(0, 1).concat(oldPainters.slice(3, 5).concat(newerPainters.slice(0, 2)));
const femalePainters2 = [...oldPainters.slice(1, 3), ...newerPainters.slice(2)];
const malePainters2 = [...oldPainters.slice(0, 1), ...oldPainters.slice(3), ...newerPainters.slice(0, 2)];

console.log(femalePainters);
console.log(malePainters

);