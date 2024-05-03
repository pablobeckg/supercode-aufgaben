function showHero(heroName: string, heroPower: string, heroEnemy: string): void {
    const nameOutput: string = `Meine Lieblingsheld ist: ${heroName}. `;
    const powerOutput: string = `Er hat die Fähigkeit: ${heroPower}. `
    const enemyOutput: string = `Sein größter Gegner ist: ${heroEnemy}`
    console.log(nameOutput + powerOutput + enemyOutput);
}

showHero('Macubaca', 'Chokolade essen', 'Pikachu');
