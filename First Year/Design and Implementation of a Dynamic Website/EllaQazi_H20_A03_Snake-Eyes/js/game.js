let $$ = sel => document.querySelector(sel);
let currentImage = 1;
let loopCounter = 0;
let gameForm = $$("#gameForm");
let startButton = $$("#startButton");
let betField = $$("#bet");
let guessField = $$("#guess");
let bet = 0;
let guess = 0;
let errPara = $$("#gameFormErr");
let firstDice = 0;
let secondDice = 0;
$$("#changeUserAnchor").addEventListener("click", clearStorage);
startButton.addEventListener("click", createGame);
startButton.addEventListener("click", setUp, true);
window.localStorage;
$(() => {
    let date = new Date();
    let dateStr = date.toDateString();
    let timeStr = date.toLocaleTimeString();
    localStorage.setItem(`lastVisit`, `${dateStr}`);
    localStorage.setItem(`lastTime`, `${timeStr}`);
    $(gameForm).validate({
        rules: {
            betField: {
                required: true,
                number: true,
                range: [1, localStorage.getItem(`money`)]
            },
            guessField: {
                required: true,
                number: true,
                range: [3, 12]
            }
        },
        messages: {
            betField: {
                required: "Please enter a bet",
                number: "Please enter a numerical bet",
                range: "Please enter a bet that is greater than $1 and lower than your total bank"
            },
            guessField: {
                required: "Please enter a guess number",
                number: "Please enter a guess number",
                range: "Please enter a guess number than is between 3 and 12 (inclusive)"
            }
        },
        submitHandler: function (gameForm) {
            localStorage.setItem(`bet`, `${betField.value}`);
            localStorage.setItem(`guess`, `${guessField.value}`);
        }
    });
});

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
    // Getters
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
}

class Dice {
    constructor() {
        this.diceNum1 = 1;
        this.diceNum2 = 1;
        this.diceTotal = 2;
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
    constructor(diceNum1, diceNum2, user) {
        this.money = localStorage.getItem(`startMoney`);
        this.guessNum = localStorage.getItem(`guess`);
        this.bet = localStorage.getItem(`bet`);
        this.diceNum1 = diceNum1;
        this.diceNum2 = diceNum2;
        this.user = user;
    }

    betWon() {
        let newBank = this.user.bank += (this.bet * 2);
        localStorage.setItem(`startMoney`, `${newBank}`);
    }

    betLost() {
        let newBank = this.user.bank -= (this.bet);
        localStorage.setItem(`startMoney`, `${newBank}`);
    }

    // Roll Dice
    playDice() {
        let dice = new Dice();
        this.diceNum1 = dice.diceRollOne();
        this.diceNum2 = dice.diceRollTwo();
        this.money = localStorage.getItem("money");
        let diceImg1 = document.querySelector("#dice1Img");
        let diceImg2 = document.querySelector("#dice2Img");
        diceRollAnimation();
        diceImg1.src = `images/Dice${this.diceNum1}`;
        diceImg2.src = `images/Dice${this.diceNum2}`;
    }

    determineEnding() {
        let firstDice = localStorage.getItem(`firstDice`);
        let secondDice = localStorage.getItem(`secondDice`);
        let guess = localStorage.getItem(`guess`);
        // Won
        if (firstDice + secondDice == guess) {
            betWon();
            location.href = "./win.html";
        }
        // Lost/Snake Eyes
        else if (firstDice + secondDice === 2) {
            betLost();
            location.href = "./snakeEyes.html";
        }
        // Other
        else if (firstDice + secondDice !== guess && firstDice + secondDice !== 2) {
            location.href = "./otherEnd.html";
        }
        // Error
        else {
            location.href = "./errorPage.html";
        }
    }
}

let userFirstName = localStorage.getItem(`firstName`);
let userLastName = localStorage.getItem(`lastName`);
let userUsername = localStorage.getItem(`username`);
let userPhoneNumber = localStorage.getItem(`phoneNumber`);
let userCity = localStorage.getItem(`city`);
let userEmailAddr = localStorage.getItem(`emailAddress`);
let userMoney = localStorage.getItem(`money`);

window.onload = function appendUserInformation() {
    let namePara = document.createElement('p');
    namePara.textContent = `${userFirstName} ${userLastName}`;
    $$("#nameListItem").appendChild(`${namePara}`);

    let usernamePara = document.createElement('p');
    usernamePara.textContent = `${userUsername}`;
    $$("#userListItem").appendChild(`${usernamePara}`);

    let pNumPara = document.createElement('p');
    pNumPara.textContent = `${userPhoneNumber}`;
    $$("#pNumListItem").appendChild(`${pNumPara}`);

    let cityPara = document.createElement('p');
    cityPara.textContent = `${userCity}`;
    $$("#cityListItem").appendChild(`${cityPara}`);

    let emailPara = document.createElement('p');
    emailPara.textContent = `${userEmailAddr}`;
    $$("#emailListItem").appendChild(emailPara);

    let moneyPara = document.createElement('p');
    moneyPara.textContent = `${userMoney}`;
    $$("#moneyTotalListItem").appendChild(moneyPara);
};

window.onload = function gameInformation() {
    let userLastVisit = localStorage.getItem(`lastVisit`);
    let userLastTime = localStorage.getItem(`lastTime`);
    let visitPara = document.createElement('p');
    visitPara.textContent = `Last visit: ${userLastVisit} Time: ${userLastTime}`;
    $$("#lastTime").appendChild(visitPara);
};

function diceRollAnimation() {
    let diceImg1 = document.querySelector("#dice1Img");
    let diceImg2 = document.querySelector("#dice2Img");
        if (currentImage === 6) {
            currentImage = 1;
            loopCounter++;
        }
        else {
            currentImage++;
        }
        diceImg1.src = `./images/DiceAnimation/Dice${currentImage}.png`;
        diceImg2.src = `./images/DiceAnimation/Dice${currentImage}.png`;
}

function setUp() {
    setInterval(diceRollAnimation, 150);
}

function endingSetUp(game) {
    setTimeout(game.determineEnding, 2000);
}

function clearStorage() {
    localStorage.clear();
}

function createGame() {
    let user = new User(userFirstName, userLastName, userUsername, userPhoneNumber, userCity, userEmailAddr, userMoney);
    let dice = new Dice();
    //firstDice = dice.diceRollOne();
    //secondDice = dice.diceRollTwo();
    firstDice = 2;
    secondDice = 2;
    diceTotal = firstDice + secondDice;
    console.log(firstDice);
    let game = new Game(firstDice, secondDice, user);
    diceRollAnimation();
    game.playDice();
    localStorage.setItem(`firstDice`, `${firstDice}`);
    localStorage.setItem(`secondDice`, `${secondDice}`);
    endingSetUp(game);

}