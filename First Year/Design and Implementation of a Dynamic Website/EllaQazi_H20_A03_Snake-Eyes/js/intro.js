let $$ = sel => document.querySelector(sel);
let fName = $$("#fName");
let lName = $$("#lName");
let user = $$("#user");
let pNum = $$("#pNum");
let city = $$("#city");
let eAddr = $$("#eAddr");
let sMoney = $$("#sMoney");
let infoForm = $$("#playerInformationForm");
window.localStorage;
$(() => {
    //Check
    if (localStorage && localStorage.firstName && localStorage.lastName && localStorage.username && localStorage.phoneNumber && localStorage.city && localStorage.emailAddress && localStorage.money) {
            location.href = "./game.html";
    }

    let date = new Date();
    let dateStr = date.toDateString();
    let timeStr = date.toLocaleTimeString();
    localStorage.setItem(`date`, `${dateStr}`);
    localStorage.setItem(`time`, `${timeStr}`);

    $(infoForm).validate({
        rules: {
            fName: {
                required: true,
                pattern: /^[a-zA-Z][\s`'\da-zA-Z][\s'\da-zA-Z]{1,20}$/
            },
            lName: {
                required: true,
                pattern: /^[a-zA-Z][\s`'\da-zA-Z][\s'\da-zA-Z]{1,30}$/
            },
            user: {
                required: true,
                pattern: /^[A-Z]{1}[a-z]{3}[0-5]{1}$/
            },
            pNum: {
                required: true,
                pattern: /[(][0-9]{3}[)]\s[0-9]{3}-[0-9]{4}/
            },
            city: {
                required: true,
                pattern: /[a-zA-Z]{1,42}/
            },
            eAddr: {
                required: true,
                pattern: /[a-zA-Z0-9\-\._]+[\@]+[a-zA-Z0-9_]+[\.]+((ca)|(org))/
            },
            sMoney: {
                // jqueryvalidation.org (for future reference)
                required: true,
                number: true,
                step: 3,
                range: [5, 5000]
            }
        },
        messages: {
            fName: {
                required: "Please enter a first name",
                pattern: "Please enter a valid first name"
            },
            lName: {
                required: "Please enter a last name",
                pattern: "Please enter a valid last name"
            },
            user: {
                required: "Please enter a username",
                pattern: "Please enter a valid username"
            },
            pNum: {
                required: "Please enter a phone number",
                pattern: "Please enter a valid phone number"
            },
            city: {
                required: "Please enter a city",
                pattern: "Please enter a valid city"
            },
            eAddr: {
                required: "Please enter an email address",
                pattern: "Please enter a valid email address"
            },
            sMoney: {
                required: "Please enter an amount of money",
                number: "Please enter a numerical input",
                step: "Please enter a multiple of 3 with no cents",
                range: "Please enter a number between 5 and 5000"
            }
        },
        submitHandler: function (infoForm) {
            localStorage.setItem(`firstName`, `${fName.value}`);
            localStorage.setItem(`lastName`, `${lName.value}`);
            localStorage.setItem(`username`, `${user.value}`);
            localStorage.setItem(`phoneNumber`, `${pNum.value}`);
            localStorage.setItem(`city`, `${city.value}`);
            localStorage.setItem(`emailAddress`, `${eAddr.value}`);
            localStorage.setItem(`money`, `${sMoney.value}`);
            location.href = "./game.html";
        }
    });
});
