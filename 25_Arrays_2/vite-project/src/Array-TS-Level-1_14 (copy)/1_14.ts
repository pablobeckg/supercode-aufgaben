const oldHollywoodActors: string[] = ['Marlon Brando', 'Audrey Hepburn', 'Elizabeth Taylor', 'Cary Grant', 'Paul Newman', 'Doris Day'];

const actorsReferenceConcat: string[] = oldHollywoodActors.concat();
const actorsReferenceSlice: string[] = oldHollywoodActors.slice();
const actorsReference: string[] = [...oldHollywoodActors];

actorsReferenceConcat.push('Maria Magdalena')
actorsReferenceSlice.push('Hulk Hogan')
actorsReference.push('Marilyn Monroe')

console.log(oldHollywoodActors);
console.log(actorsReferenceConcat);
console.log(actorsReferenceSlice);
console.log(actorsReference);