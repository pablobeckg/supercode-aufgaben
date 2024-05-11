function createImageNames() {
    const returnArray = [];
    for (let index = 1; index <= 100; index++) {
        returnArray.push(`image_${index.toString().padStart(3, '0')}.jpg`);
    }
    return returnArray;
}

console.log(createImageNames());
