// If form is valid, then game start, if not, error message.
// Jump to different page depending on outcome.
let $$ = sel => document.querySelector(sel);
let currentImage = 1;
let loopCounter = 0;
let gameForm = $$("#gameForm");
let startButton = $$("#startButton");
let betField = $$("#bet");
let guessField = $$("#guess");
let errPara = $$("#gameFormErr");
gameForm.addEventListener("onSubmit", formValid);
startButton.addEventListener('click', startGame());
betField.addEventListener("change", validateFirstName);
guessField.addEventListener("change", validateLastName);

let date = new Date();
let dateStr = date.toDateString();
let timeStr = date.toLocaleTimeString();
localStorage.setItem(`lastVisit`, `${dateStr}`);
localStorage.setItem(`lastTime`, `${timeStr}`);

class User {
    constructor(firstName, lastName, username, phoneNumber, city, email, bank) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.city = city;
        this.email = email;
        this.bank = bank;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    getPhoneNumber() {
        return this.phoneNumber;
    }
    getBankMoney() {
        return this.bank;
    }
    getUsername() {
        return this.username;
    }
    getCity() {
        return this.city;
    }
    getEmail() {
        return this.email;
    }

    registerForm() {
        window.localStorage;
        localStorage.setItem(`bet`, `${bet.value}`);
        localStorage.setItem(`guess`, `${guess.value}`);
    }

}

function validateBet() {
    let bet = betField.value;
    if (isNaN(bet) || bet > money) {
        errPara.textContent(`Error, invalid bet`);
        return false
    }
    else {
        return true
    }
}

function validateGuess() {
    let guess = guessField.value;
    if (isNaN(guess) || guess <= 2 || guess > 12) {
        errPara.textContent(`Error, invalid bet`);
        return false;
    }
    else {
        return true;
    }
}

function formValid() {
    let valid = false;
    if (validateBet()) {
        valid = true;
    }
    if (validateGuess()) {
        valid = true;
    }

    return valid;
}

class Dice {
    constructor(diceNum1, diceNum2, diceTotal) {
        this.diceNum1 = diceNum1;
        this.diceNum2 = diceNum2;
        this.diceTotal = diceTotal;
    }
    diceRollOne() {
        const minCeiled = Math.ceil(1);
        const maxFloored = Math.floor(7);
        let diceNum1 = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
        return diceNum1;
    }
    diceRollTwo() {
        const minCeiled = Math.ceil(1);
        const maxFloored = Math.floor(7);
        let diceNum2 = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
        return diceNum2;
    }
}

class Game {
    constructor(bet, guessNum, diceNum1, diceNum2) {
        this.money = localStorage.getItem("startMoney");
        this.guessNum = localStorage.getItem("guess");
        this.bet = localStorage.getItem("bet");
        this.diceNum1 = diceNum1;
        this.diceNum2 = diceNum2;
    }

    appendInfo() {
        // Name
        let namePara = document.createElement('p');
        namePara.textContent = `${localStorage.getItem("firstName")} ${localStorage.getItem("lastName")}`;
        $$("#nameListItem").appendChild(namePara);
        // Username
        let userPara = document.createElement('p');
        userPara.textContent = `${localStorage.getItem("username")}`;
        $$("#userListItem").appendChild(userPara);
        // Phone Number
        let pNumPara = document.createElement('p');
        pNumPara.textContent = `${localStorage.getItem("phoneNumber")}`;
        $$("#pNumListItem").appendChild(pNumPara);
        // City
        let cityPara = document.createElement('p');
        cityPara.textContent = `${localStorage.getItem("city")}`;
        $$("#cityListItem").appendChild(cityPara);
        // Email Address
        let emailPara = document.createElement('p');
        emailPara.textContent = `${localStorage.getItem("emailAddress")}`;
        $$("#emailListItem").appendChild(emailPara);

        // TotalMoney
        let moneyPara = document.createElement('p');
        moneyPara.textContent = `${localStorage.getItem("emailAddress")}`;
        $$("#moneyTotalListItem").appendChild(moneyPara);
        // Bet
        let betPara = document.createElement('p');
        betPara.textContent = `${localStorage.getItem("emailAddress")}`;
        $$("#betListItem").appendChild(betPara);
        // Dice 1
        let dice1Para = document.createElement('p');
        dice1Para.textContent = `${localStorage.getItem("emailAddress")}`;
        $$("#dice1ListItem").appendChild(dice1Para);
        // Dice 2
        let dice2Para = document.createElement('p');
        dice2Para.textContent = `${localStorage.getItem("emailAddress")}`;
        $$("#dice2ListItem").appendChild(dice2Para);
        // Dice Total
        let diceTotalPara = document.createElement('p');
        diceTotalPara.textContent = `${localStorage.getItem("emailAddress")}`;
        $$("#diceTotalListItem").appendChild(diceTotalPara);
    }

    diceRollAnimation() {
        let diceImg1 = document.querySelector("#dice1Img");
        let diceImg2 = document.querySelector("#dice2Img");
        let loopCounter = 0;
        while (loopCounter <= 2) {
            if (currentImage === 6) {
                currentImage = 0;
                loopCounter++;
            }
            else {
                currentImage++;
            }
            diceImg1.src = `images/DiceAnimation/Dice${currentImage}.png`;
            diceImg2.src = `images/DiceAnimation/Dice${currentImage}.png`;
        }
    }

    gamePlayUnknownNum(bet, guessNum) {
        let dice = new Dice();
        this.diceNum1 = dice.diceRollOne();
        this.diceNum2 = dice.diceRollTwo();
        this.money = localStorage.getItem("startMoney");
        let diceImg1 = document.querySelector("#dice1Img");
        let diceImg2 = document.querySelector("#dice2Img");
        diceRollAnimation();
        document.getElementById("#dice1Img").src = `images/Dice${this.diceNum1}`;
        document.getElementById("#dice2Img").src = `images/Dice${this.diceNum2}`;
    }

    // For error messages
    gameIsError() {
        if (this.guessNum > 12 || this.guessNum <= 2) {
            return true;
        }
        else if (this.bet > this.money) {
            return true;
        }
        else {
            return false;
        }
    }

    // If the result is a win
    gameIsWon() {
        if (this.diceNum1 + this.diceNum2 === this.guessNum && this.diceNum1 + this.diceNum2 !== 2) {
            let resultText = document.querySelector("#result");
            resultText.textContent = "WIN";
            this.money += (this.bet * 2);
            return true;
        }
        else {
            return false;
        }
    }

    // If the result is snake eyes
    gameIsSnakeEyes() {
        if (this.diceNum1 + this.diceNum2 == 2) {
            let resultText = document.querySelector("#result");
            resultText.textContent = "SNAKE EYES";
            this.money -= this.bet;
            return true;
        }
        else {
            return false;
        }
    }

    // Other endings for bug testing
    gameIsOtherEnd() {
        if (this.gameIsWon === false && this.gameIsSnakeEyes === false && this.gameIsError === false) {
            return true;
        }
        else {
            return false;
        }
    }
}

gameForm.onsubmit = formValid;
function registerForm() {
    window.localStorage;
    if (formValid) {

        localStorage.setItem(`bet`, `${betNum.value}`);
        localStorage.setItem(`guess`, `${guessNum.value}`);
        location.reload;
    }
}

/*
function startGame() {
    let newGame = new Game(localStorage.getItem("bet"), localStorage.getItem("guess"), Dice.diceRollOne, Dice.diceRollTwo);
    newGame.gamePlayUnknownNum(localStorage.getItem("bet"), localStorage.getItem("guess"));
    newGame.gameIsError();
    newGame.gameIsWon();
    newGame.gameIsSnakeEyes();
    newGame.gameIsOtherEnd();
}
    */

