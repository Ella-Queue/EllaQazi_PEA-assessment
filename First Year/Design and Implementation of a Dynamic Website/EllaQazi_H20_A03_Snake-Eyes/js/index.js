let skipButton = document.querySelector("button");
skipButton.addEventListener('click', switchSkip);
let skip = false;
let currentImage = 1;

function switchSkip() {
    location.href = "./intro.html";
}

function splash() {
    let image = document.querySelector("img");
    if (currentImage === 40) {
        location.href = "./intro.html";
    }
    else {
        currentImage++;
    }
    image.src = `./images/SplashAnimation/Splash${currentImage}.PNG`;
}

function setUp() {
    setInterval(splash, 150);
}

addEventListener("load", setUp, true);

function draw() {
    let canv = document.querySelector("canvas");
    // Triangle
    let ctx = canv.getContext('2d');
    ctx.fillStyle = "#a8ad8b";
    ctx.strokeStyle = "#02120b";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(50, 80);
    ctx.lineTo(80, 30);
    ctx.lineTo(20, 30);
    ctx.lineTo(50, 80);
    ctx.stroke();
    ctx.fill();
    ctx.closePath;
    // Exclamation Point
    let ctx2 = canv.getContext('2d');
    ctx2.fillStyle = "#00120b";
    ctx2.strokeStyle = "#00120b";
    ctx2.lineWidth = 6;
    ctx2.beginPath();
    ctx2.moveTo(50, 70);
    ctx2.lineTo(50, 50);
    ctx2.fillRect(45, 30, 10, 10);
    ctx2.stroke();
    ctx2.fill();
    ctx2.closePath;
}

addEventListener("load", draw, false);