let codingLanguages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

const europeanCountries2 = [
    "France",
    "Germany",
    "Sweden",
    "Great Britain",
    "Czech Republic",
    "Switzerland",
  ];
  

function sortDescending(a: string, b: string) {
return b.localeCompare(a);
};

console.log(codingLanguages.sort(sortDescending));
console.log(codingLanguages.sort(sortDescending).reverse());
console.log(europeanCountries2.sort(sortDescending));
console.log(europeanCountries2.sort(sortDescending).reverse());