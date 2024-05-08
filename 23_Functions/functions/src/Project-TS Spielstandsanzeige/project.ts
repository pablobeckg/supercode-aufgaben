//Setup
let counter1 = 0;
let counter2 = 0;

const field = document.getElementById("home");
const field2 = document.getElementById("away");
const teamName1 = document.getElementById("team1");
const teamName2 = document.getElementById("team2");

const buttonElement1 = document.getElementById("button1");
const buttonElement2 = document.getElementById("button2");
const buttonElement3 = document.getElementById("button3");
const buttonElement4 = document.getElementById("button4");
const buttonElement5 = document.getElementById("button5");
const buttonElement6 = document.getElementById("button6");

const buttonReset = document.getElementById("reset");

// Button +1
function handleCountButton1Clicked(event: MouseEvent) {
  event.preventDefault();
  counter1++;
  if (field) {
    field.textContent = counter1.toString();
  }
}

if (field && buttonElement1) {
  buttonElement1.addEventListener("click", handleCountButton1Clicked);
} else {
  console.error("counterElement oder buttonElement nicht gefunden!");
}

// Button +2
function handleCountButton2Clicked(event: MouseEvent) {
  event.preventDefault();
  counter1 += 2;
  if (field) {
    field.textContent = counter1.toString();
  }
}

if (field && buttonElement2) {
  buttonElement2.addEventListener("click", handleCountButton2Clicked);
} else {
  console.error("counterElement oder buttonElement nicht gefunden!");
}

// Button +3
function handleCountButton3Clicked(event: MouseEvent) {
  event.preventDefault();
  counter1 += 3;
  if (field) {
    field.textContent = counter1.toString();
  }
}

if (field && buttonElement3) {
  buttonElement3.addEventListener("click", handleCountButton3Clicked);
} else {
  console.error("counterElement oder buttonElement nicht gefunden!");
}


// Away Button +1
function handleCountButton4Clicked(event: MouseEvent) {
  event.preventDefault();
  counter2 += 1;
  if (field2) {
    field2.textContent = counter2.toString();
  }
}

if (field2 && buttonElement4) {
  buttonElement4.addEventListener("click", handleCountButton4Clicked);
} else {
  console.error("counterElement oder buttonElement nicht gefunden!");
}



// Away Button +2
function handleCountButton5Clicked(event: MouseEvent) {
  event.preventDefault();
  counter2 += 2;
  if (field2) {
    field2.textContent = counter2.toString();
  }
}

if (field2 && buttonElement5) {
  buttonElement5.addEventListener("click", handleCountButton5Clicked);
} else {
  console.error("counterElement oder buttonElement nicht gefunden!");
}



// Away Button +3
function handleCountButton6Clicked(event: MouseEvent) {
  event.preventDefault();
  counter2 += 3;
  if (field2) {
    field2.textContent = counter2.toString();
  }
}

if (field2 && buttonElement6) {
  buttonElement6.addEventListener("click", handleCountButton6Clicked);
} else {
  console.error("counterElement oder buttonElement nicht gefunden!");
}

// * RESET
function handleCountButtonResetClicked(event: MouseEvent) {
  event.preventDefault();
  counter1 = 0;
  counter2 = 0;
  if (field && field2 ) {
    field.textContent = counter1.toString();
    field2.textContent = counter2.toString();
  }
}

if (field2 && field && buttonReset) {
  buttonReset.addEventListener("click", handleCountButtonResetClicked);
} else {
  console.error("counterElement oder buttonElement nicht gefunden!");
}
