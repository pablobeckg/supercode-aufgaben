let languages: string[] = [
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
  "Swift",
];

const europeanCountries = [
  "France",
  "Germany",
  "Sweden",
  "Great Britain",
  "Czech Republic",
  "Switzerland",
];

function sortAlphabetically(a: string, b: string) {
  return a.localeCompare(b);
}
console.log(languages.sort(sortAlphabetically));
console.log(europeanCountries.sort(sortAlphabetically));
