//----------Task 1----------
function onclick1() {
    let text = document.getElementById('text1').value;
    const regex = RegExp('^([1-9]|0[1-9]|[12]\\d|3[01])[/.-]([1-9]|0[1-9]|1[0-2])[/.-](\\d|\\d{2})$');
    let result = regex.test(text);
    if (result === true) {
        document.getElementById('result1').innerHTML = "Відповідь: так";
    } else {
        document.getElementById('result1').innerHTML = "Відповідь: ні";
    }
}

//----------Task 2----------
function onclick2() {
    let text = document.getElementById('text2').value;
    const regex = /ab{3,}a/g;
    let result = text.match(regex);
    document.getElementById('result2').innerHTML = "Результат: "
    for (let i = 0; i < result.length; i++) {
        document.getElementById('result2').innerHTML += "<br>" + result[i];
    }
}

//----------Task 3----------
function onclick3() {
    let text = document.getElementById('text3').value;
    const regex = RegExp('\\d{3}', 'g');
    text = text.split("").reverse().join("").replace(regex, str => str + "_").split("").reverse().join("");
    document.getElementById('result3').innerHTML = "Результат: " + text;
}

//----------Task 4----------
function onclick4() {
    let text = document.getElementById('text4').value;
    const regex = RegExp('^(http|https)://[A-Za-z_-]+\\.[A-Za-z]+$');
    let result = regex.test(text);
    if (result === true) {
        document.getElementById('result4').innerHTML = "Відповідь: правильний домен";
    } else {
        document.getElementById('result4').innerHTML = "Відповідь: домен містить помилки";
    }
}

//----------Task 5----------
function onclick5() {
    let text = document.getElementById('text5').value;
    const regex = RegExp('^([1-9]|0[1-9]|[12]\\d|3[01])[/.-]([1-9]|0[1-9]|1[0-2])[/.-](|[0-9])\\d{3}$');
    let result = regex.test(text);
    if (result === true) {
        document.getElementById('result5').innerHTML = "Відповідь: так";
    } else {
        document.getElementById('result5').innerHTML = "Відповідь: ні";
    }
}