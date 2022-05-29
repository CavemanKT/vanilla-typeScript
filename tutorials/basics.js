"use strict";
const button = document.querySelector('button');
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
function add(num1, num2, showResult) {
    if (!showResult) {
        console.log(showResult);
        return showResult;
    }
    else {
        console.log();
        return num1 + num2;
    }
}
button.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(add(+input1.value, +input2.value, true));
});
