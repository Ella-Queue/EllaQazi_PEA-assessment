/*
// Test Case 1: diceTotal == guessNum
test = new Game();
test.gamePlayKnownNum(50, 12, 6, 6);
if (test.gameIsWon() === true && test.gameIsSnakeEyes() === false) {
    console.log(`Test Case 1 Passed`)
}
else {
    console.log(`Test Case 1 Failed`)
}

// Test Case 2: diceTotal != guessNum && diceTotal != 2
test.gamePlayKnownNum(50, 10, 6, 6);
if (test.gameIsSnakeEyes() === false && test.gameIsWon() === false) {
    console.log(`Test Case 2 Passed`);
}
else {
    console.log(`Test Case 2 Failed`);
}

// Test Case 3: diceTotal == 2
test.gamePlayKnownNum(50, 4, 1, 1);
if (test.gameIsSnakeEyes() === true && test.gameIsWon() === false) {
    console.log(`Test Case 3 Passed`);
}
else {
    console.log(`Test Case 3 Failed`);
}

// Test Case 4: guessNum too high
test.gamePlayKnownNum(50, 14, 4, 1);
if (test.gameIsError() === true) {
    console.log(`Test Case 4 Passed`);
}
else {
    console.log(`Test Case 4 Failed`);
}

// Test Case 5: guessNum too low
test.gamePlayKnownNum(50, 1, 1, 6);
if (test.gameIsError() === true) {
    console.log(`Test Case 5 Passed`);
}
else {
    console.log(`Test Case 5 Failed`);
}

// Test Case 6: bet too high
test.gamePlayKnownNum(1000000000, 12, 1, 1);
if (test.gameIsError() === true) {
    console.log(`Test Case 6 Passed`);
}
else {
    console.log(`Test Case 6 Failed`);
}

// Test Case 7: diceNum1 and diceNum2 roll
dice = new Dice();
console.log(`${dice.diceRollOne()} ${dice.diceRollTwo()}`);
if (dice.diceRollOne() >= 1 && dice.diceRollOne() <= 6 && dice.diceRollTwo() >= 1 && dice.diceRollTwo() <= 6) {
    console.log(`Test Case 7 Passed`);
}
else {
    console.log(`Test Case 7 Failed`);
}

// Test Case 8: fullName
user = new User("Ella", "Qazi", "MarkersRGood", 8193286326, "Gatineau", "ellaqazi@gmail.com", 10000);
if (user.getFullName() === "Ella Qazi") {
    console.log(`Test Case 8 Passed`);
}
else {
    console.log(`Test Case 8 Failed`);
}

// Test Case 9: fullName is a number
user = new User("13", "12", "MarkersRGood", 8193286326, "Gatineau", "ellaqazi@gmail.com", 10000);
if (user.getFullName() === 0) {
    console.log(`Test Case 9 Passed`);
}
else {
    console.log(`Test Case 9 Failed`);
}

// Test Case 10: phoneNumber is not a number
user = new User("Ella", "Qazi", "MarkersRGood", "hello", "Gatineau", "ellaqazi@gmail.com", 10000);
if (user.getPhoneNumber() === 0) {
    console.log(`Test Case 10 Passed`);
}
else {
    console.log(`Test Case 10 Failed`);
}

// Test Case 11: phoneNumber is invalid length
user = new User("Ella", "Qazi", "MarkersRGood", 819328632, "Gatineau", "ellaqazi@gmail.com", 10000);
if (user.getPhoneNumber() === 0) {
    console.log(`Test Case 11 Passed`);
}
else {
    console.log(`Test Case 11 Failed`);
}

// Test Case 12: money is not a number
user = new User("Ella", "Qazi", "MarkersRGood", 8193286326, "Gatineau", "ellaqazi@gmail.com", "hello");
if (user.getBankMoney() === 0) {
    console.log(`Test Case 12 Passed`);
}
else {
    console.log(`Test Case 12 Failed`);
}

// Test Case 13: user info is all correct
user = new User("Ella", "Qazi", "MarkersRGood", 8193286326, "Gatineau", "ellaqazi@gmail.com", 10000);
if (user.getFullName() === "Ella Qazi" && user.getUsername() === "MarkersRGood" && user.getPhoneNumber() === 8193286326 && user.getCity() === "Gatineau" && user.getEmail() === "ellaqazi@gmail.com" && user.getBankMoney() === 10000) {
    console.log(`Test Case 13 Passed`);
}
else {
    console.log(`Test Case 13 Failed`);
}

// Test Case 14: gamePlayUnknownNum
test2 = new Game();
while (test2.gameIsSnakeEyes() === false && test2.gameIsWon() === false) {
test2.gamePlayUnknownNum(50, 10);
console.log(`guess = ${test2.guessNum} diceNum1 = ${test2.diceNum1} diceNum2 = ${test2.diceNum2} money = ${test2.money}`);
if (test2.gameIsSnakeEyes() === true) {
    console.log(`Test Case 14 result: Snake Eyes`);
    console.log(`guess = ${test2.guessNum} diceNum1 = ${test2.diceNum1} diceNum2 = ${test2.diceNum2} money = ${test2.money}`);
}
else if (test2.gameIsWon() === true) {
    console.log(`Test Case 14 result: Win`);
    console.log(`guess = ${test2.guessNum} diceNum1 = ${test2.diceNum1} diceNum2 = ${test2.diceNum2} money = ${test2.money}`);
}
}*/