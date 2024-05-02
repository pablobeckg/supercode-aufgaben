const john = {groesse: 170, alter: 22};
const meike = {groesse: 168, alter: 34};
const johnScore = john.alter * 5 + john.groesse;
const meikeScore = meike.alter * 5 + meike.groesse;
console.log('john score:', johnScore);
console.log('meike score:', meikeScore)

if (johnScore > meikeScore) {
    console.log(`John gewinnt das Spiel mit ${johnScore} Punkten!`)
} else if (johnScore == meikeScore) {
    console.log("It's a tie")
} else {
    console.log(`Meike gewinnt das Spiel mit ${meikeScore} Punkten!`)
}


