const salesMonth = Math.ceil(Math.random() * 12);

let quarter;
switch (true) {
    case salesMonth >= 1 && salesMonth <= 3:
        quarter = "1. Quartal";
        break;
    case salesMonth >= 4 && salesMonth <= 6:
        quarter = "2. Quartal";
        break;
    case salesMonth >= 7 && salesMonth <= 9:
        quarter = "3. Quartal";
        break;
    case salesMonth >= 10 && salesMonth <= 12:
        quarter = "4. Quartal";
        break;
    default:
        quarter = "Ungültiger Monat";
        break;
}


const totalSales = Math.ceil(Math.random() * 10000 + 999);


let sales;
switch (true) {
    case totalSales >= 1000 && totalSales <= 2500:
        sales = "schlecht.";
        break;
    case totalSales >= 2501 && totalSales <= 5000:
        sales = "mittelmäßig.";
        break;
    case totalSales >= 5001 && totalSales <= 7500:
        sales = "hoch.";
        break;
    case totalSales >= 7501 && totalSales <= 10000:
        sales = "unglaublich!";
        break;
    default:
        sales = "Ungültige sales";
        break;
}

console.log(`Im ${quarter} war der Umsatz ${sales}`)


