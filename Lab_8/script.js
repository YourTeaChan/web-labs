//----------Task 1----------
document.onclick = function (event) {
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("square").style.top = y + "px";
    document.getElementById("square").style.left = x + "px";
}

//----------Task 2----------
document.getElementById("selection").onchange = function () {
    let select = document.getElementById('selection');
    let selectedElement = select.options[select.selectedIndex];
    if (select.selectedIndex === -1) {
        document.getElementById("selectedElement").value = "Оберіть елемент";
    } else {
        document.getElementById("selectedElement").value = "Обраний елемент: " + selectedElement.text;
    }
}