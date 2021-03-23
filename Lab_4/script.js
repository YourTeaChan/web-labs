//----------Task 1----------
let message;
let timerID_1;

function onClick_1() {
    message = document.getElementById('text').value;
    timerID_1 = setTimeout(alertMessage, 3000);
}

function alertMessage() {
    alert(message);
    document.getElementById('text').value = "";
    clearTimeout(timerID_1);
}

//----------Task 2----------
setInterval(changeImage, 2000);
let imageNumber = 0;

function changeImage() {
    switch (imageNumber++) {
        case 0: {
            document.getElementById('image').src = "images/Day.jpg";
            break;
        }
        case 1: {
            document.getElementById('image').src = "images/Evening.jpg";
            break;
        }
        case 2: {
            document.getElementById('image').src = "images/Night.jpg";
            break;
        }
        case 3: {
            document.getElementById('image').src = "images/Morning.jpg";
            imageNumber = 0;
            break;
        }
    }
}

//----------Task 3----------
let newWindow;

let timerID_3 = setTimeout(openWindow, 3000);

function openWindow() {
    newWindow = window.open("", "newWindow", "left=1300,width=300,height=600");
    newWindow.document.title = "Нове вікно";
    newWindow.document.body.innerHTML = "Нове вікно";
    clearTimeout(timerID_3);
    timerID_3 = setTimeout(closeWindow, 3000);
}

function closeWindow() {
    newWindow.close();
    clearTimeout(timerID_3);
}

//----------Task 4----------
let timerID_4;

let result, currentNum = 0, nextNum = 1;

function fibonacciOn() {
    timerID_4 = setInterval(fibonacci, 1000);
}

function fibonacciOff() {
    clearInterval(timerID_4);
}

function fibonacci() {
    result = currentNum + nextNum;
    document.getElementById('Fibonacci').innerHTML += nextNum + ' ';
    currentNum = nextNum;
    nextNum = result;
}