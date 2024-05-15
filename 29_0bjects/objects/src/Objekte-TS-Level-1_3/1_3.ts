type Apple = {
    color: string;
    size: string;
    isSweet: boolean;
  };
  
  let redApple: Apple = { color: 'red', size: 'big', isSweet: true };
  let greenApple: Apple = { color: 'green', size: 'small', isSweet: true };
  let yellowApple: Apple = { color: 'yellow', size: 'big', isSweet: false };
  let apples: Apple[] = [redApple, greenApple, yellowApple];

  for (let index = 0; index < apples.length; index++) {
    console.log(apples[index].size);
    
  }
  
  apples.forEach((apple) => {
    console.log(apple.color)
  });

  console.log(apples.length)

  const pinkApple: Apple = {
    color: 'pink',
    size: 'super big',
    isSweet: false
  }

  apples.push(pinkApple);

  console.log(apples);