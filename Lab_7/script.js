//----------Task 1----------
function onclick1() {
    let sentence = document.getElementById('text1').value;
    sentence = sentence.trim();
    let words = sentence.split(" ");
    if (words.length < 7) {
        document.getElementById('result1').innerHTML = "Результат: мало слів";
        return;
    }
    words.sort(randomSort);
    sentence = words.join(" ");
    document.getElementById('result1').innerHTML = "Результат: " + sentence;
}

function randomSort() {
    return 0.5 - Math.random();
}

//----------Task 2----------
function onclick2() {
    let yearOfEntry = document.getElementById('text2').value;
    const regex = RegExp('^[12]\\d{3}$');
    if (regex.test(yearOfEntry) === false) {
        document.getElementById('result2').innerHTML = "Результат: неправильно введено рік";
        return;
    }
    let dateNow = new Date();
    let dateOfEntry = new Date(yearOfEntry, 8, 1);
    let course = calculateCourse(dateNow, dateOfEntry);
    let result;
    if (course > 6) {
        result = "студент вже випустився";
    } else if (course < 1) {
        result = "студент ще не студент :)";
    } else {
        result = course + " курс";
    }
    document.getElementById('result2').innerHTML = "Результат: " + result;
}

function calculateCourse(dateNow, anotherDate) {
    let course = dateNow.getFullYear() - anotherDate.getFullYear();
    if (course >= 0 && course <= 6) {
        if (dateNow.getMonth() >= 8 || dateNow.getMonth() === 7 && dateNow.getDate() === 31) {
            course++;
        }
    }
    return course;
}

//----------Task 3----------
function onclick3() {
    let marks = document.getElementById('text3_1').value;
    let maximum = document.getElementById('text3_2').value;
    marks = marks.split(", ");
    let result = 0;
    for (let i = 0; i < marks.length; i++) {
        result += parseInt(marks[i]);
    }
    if (result > maximum) {
        result = maximum;
    }
    document.getElementById('result3').innerHTML = "Результат: " + result;
}