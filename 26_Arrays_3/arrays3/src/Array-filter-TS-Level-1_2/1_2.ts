const heroArr: (string | null | undefined)[] = [
  "Superman",
  "Batman",
  undefined,
  undefined,
  "Wonder Woman",
  "Spider-Man",
  "Black Widow",
  "Iron Man",
  "Thor",
  "Catwoman",
  undefined,
  null,
];

function showHeroesCleaned(arra: (string | null | undefined)[]): void {
    arra = arra.filter(hero => hero !== null && hero !== undefined)
    console.log(arra);
}


showHeroesCleaned(heroArr);