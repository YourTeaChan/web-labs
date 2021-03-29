//----------Task 1----------
function onclick1() {
    let text = document.getElementById('text1').value;
    let array = text.split(", ");
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            result.push(array[i]);
        }
    }
    if (result.length === 0) {
        result = "Таких елементів немає";
    }
    document.getElementById('result1').innerHTML = "Результат: " + result;
}

//----------Task 2----------
function onclick2() {
    let number = document.getElementById('text2').value;
    let result = [];
    for (let i = 1; i <= number; i++) {
        let value = 0;
        for (let j = 0; j < i; j++) {
            value += i * Math.pow(10, j);
        }
        result.push(value);
    }
    document.getElementById('result2').innerHTML = "Результат: " + result;
}

//----------Task 3----------
function onclick3() {
    let number = document.getElementById('text3').value;
    let result = [];
    for (let i = 1; i <= number; i++) {
        let value = "";
        for (let j = 0; j < i; j++) {
            value += "x";
        }
        result.push(value);
    }
    document.getElementById('result3').innerHTML = "Результат: " + result;
    alert("Результат: " + result);
}

//----------Task 4----------
function onclick4() {
    let text = document.getElementById('text4').value;
    let array = text.split(", ");
    array.sort(randomSort);
    document.getElementById('result4').innerHTML = "Результат: " + array;
}

function randomSort() {
    return 0.5 - Math.random();
}

// ----------Task 5----------
function onclick5() {
    let coefficients = document.getElementById('text5').value;
    let array = coefficients.split(" ");
    let a = 0, b = 0, c = 0;
    a = array[0];
    b = array[1];
    c = array[2];
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant >= 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById('result5_1').innerHTML = "x<sub>1</sub> = " + x1;
        document.getElementById('result5_2').innerHTML = "x<sub>2</sub> = " + x2;
    } else {
        alert("Розв'язків немає");
        document.getElementById('result5_1').innerHTML = "x<sub>1</sub> = ";
        document.getElementById('result5_2').innerHTML = "x<sub>2</sub> = ";
    }
}