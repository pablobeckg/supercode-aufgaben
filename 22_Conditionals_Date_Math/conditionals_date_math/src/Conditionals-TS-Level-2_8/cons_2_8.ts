let schoolGrade = Math.ceil(Math.random() * 10);

switch (schoolGrade) {
    case 1:
        console.log("Sehr gut");
        break;
    case 2:
        console.log("Gut");
        break;
    case 3:
        console.log("Befriedigend");
        break;
    case 4:
        console.log("Ausreichend");
        break;
    case 5:
        console.log("Mangelhaft");
        break;
    case 6:
        console.log("Ungenügend");
        break;
    default:
        console.log("Das ist keine gültige Schulnote.");
}

console.log("Schulnote:", schoolGrade);
