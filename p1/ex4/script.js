const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');
const button6 = document.getElementById('6');
const button7 = document.getElementById('7');
const button8 = document.getElementById('8');
const button9 = document.getElementById('9');
const button0 = document.getElementById('0');
const buttonSum = document.getElementById('+');
const buttonSub = document.getElementById('-');
const buttonMult = document.getElementById('*');
const buttonDiv = document.getElementById('/');
const buttonEqual = document.getElementById('=');

operation = [];

function write(button){
    let text = document.getElementById('text').innerText;
    text = text + button;
    document.getElementById('text').innerHTML = text;
    console.log(operation)
}

button1.addEventListener('click', () =>{
    operation.push(1);
    write(1);
});

button2.addEventListener('click', () =>{
    operation.push(2);
    write(2);
});

button3.addEventListener('click', () =>{
    operation.push(3);
    write(3);
});

button4.addEventListener('click', () =>{
    operation.push(4);
    write(4);
});

button5.addEventListener('click', () =>{
    operation.push(5);
    write(5);
});

button6.addEventListener('click', () =>{
    operation.push(6);
    write(6);
});

button7.addEventListener('click', () =>{
    operation.push(7);
    write(7);
});

button8.addEventListener('click', () =>{
    operation.push(8);
    write(8);
});

button9.addEventListener('click', () =>{
    operation.push(9);
    write(9);
});

button0.addEventListener('click', () =>{
    operation.push(0);
    write(0);
});

buttonSum.addEventListener('click', () =>{
    operation.push("+");
    write("+");
});

buttonSub.addEventListener('click', () =>{
    operation.push("-");
    write("-");
});

buttonDiv.addEventListener('click', () =>{
    operation.push("/");
    write("/");
});

buttonMult.addEventListener('click', () =>{
    operation.push("*");
    write("*");
});

buttonEqual.addEventListener('click', () =>{
    operation.push("=");
    write("=");
});