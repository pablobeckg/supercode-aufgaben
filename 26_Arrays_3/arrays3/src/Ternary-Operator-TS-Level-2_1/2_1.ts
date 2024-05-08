const woerter: string[] = ["Banane", "Kaktus", "Flausch", "Ente", "Apfel", "Auto", "Giraffe", "Schmetterling", "Krokodil", "Lampe"];

function filterBiggerThanSix(arra2: string[]): string[] {
    return arra2.filter(word => word.length <= 6);
}
function filterE(arra2: string[]): string[] {
    return arra2.filter(word => !word.toUpperCase().includes('E') );
}

console.log(filterBiggerThanSix(woerter));
console.log(filterE(woerter));
