function multiplyAndDivide(num1: number, num2: number): void {
    num2 == 0 ? console.log('Division durch 0 nicht erlaubt') : (
        console.log(num1 * num2), 
        console.log(num1 / num2)
    );
  
//     if (num2 == 0) {
//     console.log('Division durch 0 nicht erlaubt')
//   } else {
//     console.log(num1 * num2);
//     console.log(num1 / num2);
//   }
} 

multiplyAndDivide(10, 2);
multiplyAndDivide(30, 20);
multiplyAndDivide(100, 100);
multiplyAndDivide(5, 0);
multiplyAndDivide(45, 173);
multiplyAndDivide(1, 1000);