function difference(num) {
    let difference = num - 27;
    if (num > 27) {
        difference *= 2;
    }
    console.log(difference);
}

// Testen der Zahlen
difference(35);
difference(74);
difference(123);