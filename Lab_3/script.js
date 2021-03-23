//----------Task 1----------
const browserLanguage = navigator.language;
let language;

if (browserLanguage === 'en') {
    language = 'англійська';
} else if (browserLanguage === 'ru') {
    language = 'російська';
} else if (browserLanguage === 'uk' || browserLanguage === 'uk-UA') {
    language = 'українська';
} else {
    language = browserLanguage;
}

alert("Мова браузера: " + language + "\n" + "Операційна система: " + navigator.platform);

//----------Task 2----------
let name = prompt("Введіть ім'я: ")
while (name === "" || name == null) {
    alert("Ви не ввели ім'я! Спробуйте ще раз.");
    name = prompt("Введіть ім'я: ")
}

let message = "Привіт, " + name + "!";
alert(message);
document.getElementById("student").innerHTML = message;

//----------Task 3----------
let hideWindow = confirm("Приховати всі div?");
const allDivs = document.getElementsByTagName("div");

if (hideWindow === true) {
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].style.display = "none";
    }
} else {
    alert("Ви відмовили у приховуванні всіх div")
}

function openAllWindows() {
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].style.display = "flex";
    }
}

//----------Task 4----------
let otherWindow;

function click1() {
    otherWindow = window.open("https://lpnu.ua/", "newWindow", "scrollbars=no,location=no,toolbar=no,height=500,width=400");
}

function click2() {
    otherWindow.close();
}