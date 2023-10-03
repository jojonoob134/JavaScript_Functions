console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds (count){
    while (count > 0){
        if (count % 2 == 1){
            console.log(count);
        }
        count--;
    }

}
printOdds(100);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function ageCheck(age, userName) {
    let aboveSixteen = false;
    if ( age > 16) aboveSixteen = true;
    if (aboveSixteen) console.log(`Congrats ${userName}, you can drive!`);
    else console.log(`Sorry ${userName}, but you need to wait until you're 16.`);
    console.log(aboveSixteen);
    console.log(userName);
}
ageCheck(16, 'jorge');

console.log("EXERCISE 3:\n==========\n");
function Quadrant(x,y){
    if (x === 0 && y === 0) console.log("You are in the center")
    else if (x === 0) console.log("You are in the x-axis");
    else if (y === 0) console.log("You are in the y-axis");
    if (x > 0 && y > 0)console.log("You are in quadrant 1");
    if (x < 0 && y > 0)console.log("You are in quadrant 2");
    if (x < 0 && y < 0)console.log("You are in quadrant 3");
    if (x > 0 && y < 0)console.log("You are in quadrant 4");
}
Quadrant(1,-1)

console.log("EXERCISE 4:\n==========\n");
function whatTriangle(side1,side2,side3){
    let isValid = false
    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) isValid = true;
    if (isValid){
        if (side1 == side2 == side3) console.log("This is a equilateral");
        else if (side1 == side2 || side2 == side3 || side1 == side3)console.log("This is a isosceles");
        else console.log("This is a scalene");
    }
    else console.log("not a valid triangel");
}
whatTriangle(2,3,1);