let weekdayAsNumber: number;
let weekdayAsString: string = '';

const input = window.prompt("Please insert a number from 1 to 7");

if (input !== null) {
    weekdayAsNumber = parseInt(input);

    switch (weekdayAsNumber) {
        case 1:
            weekdayAsString = 'Montag';
            break;
        case 2:
            weekdayAsString = 'Dienstag';
            break;
        case 3:
            weekdayAsString = 'Mittwoch';
            break;
        case 4:
            weekdayAsString = 'Donnerstag';
            break;
        case 5:
            weekdayAsString = 'Freitag';
            break;
        case 6:
            weekdayAsString = 'Samstag';
            break;
        case 7:
            weekdayAsString = 'Sonntag';
            break;
        default:
            console.error("Weekday must be between 1 and 7");
            break;
    }

    console.log(weekdayAsString);
} else {
    console.error("Input is null. Please provide a valid number.");
}
