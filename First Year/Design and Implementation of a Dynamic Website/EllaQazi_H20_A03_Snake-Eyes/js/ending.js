let resultSpan = document.querySelector("#guessAndResult");
let bankSpan = document.querySelector("#bankTotal");

let guess = localStorage.getItem(`guess`);
let dice1 = localStorage.getItem(`firstDice`);
let dice2 = localStorage.getItem(`secondDice`);
let bank = localStorage.getItem(`money`);

let resultPara = document.createElement('p');
let bankPara = document.createElement('p');

resultPara.textContent = `Guess: ${guess} Dice1: ${dice1} Dice2: ${dice2}`;
resultSpan.appendChild(resultPara);

bankPara.textContent = `Money: ${bank}`;
bankSpan.appendChild(bankPara);