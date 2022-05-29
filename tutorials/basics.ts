const button = document.querySelector('button');
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

function add(num1: number, num2: number, showResult: boolean) {
    if(!showResult) {
        console.log(showResult);
        return showResult
    } else {
        console.log();
        return num1 + num2;
    }
}



button.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(add(+input1.value, +input2.value, true));
})

