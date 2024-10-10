document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('open');
});

const plus = document.getElementById("butplus");
const minus = document.getElementById("butminus");
const mult = document.getElementById("butmult");
const div = document.getElementById("butdiv");
const cos = document.getElementById("butcos");
const sin = document.getElementById("butsin");
const tg = document.getElementById("buttg");
const ctg = document.getElementById("butctg");



let first = document.getElementById("first");
let second = document.getElementById("second");
let variable = document.getElementById("variable");

const res_var = document.getElementById("res_var");
const result = document.getElementById("result");

let res = 0;

function calculus(mark) {
    const num1 = parseFloat(first.value) || 0;
    const num2 = parseFloat(second.value) || 0;
    switch(mark){
        case "+":
            res = num1 + num2;
            break;
        case "-":
            res = num1 - num2;
            break;
        case "*":
            res = num1 * num2;
            break;
        case "/":
            res = num2 !== 0 ? num1 / num2 :"error";
            break;
    }
    result.textContent = res;
}

plus.addEventListener("click", (event) =>{
    event.preventDefault()
    calculus("+");
});
minus.addEventListener("click", (event) =>{
    event.preventDefault()
    calculus("-");
});
mult.addEventListener("click", (event) =>{
    event.preventDefault()
    calculus("*");
});
div.addEventListener("click", (event) =>{
    event.preventDefault()
    calculus("/");
});

function trigo(mark){
    num = parseFloat(variable.value) || 0
    num = num * (Math.PI/180)
    switch(mark) {
        case "sin":
            val = Math.sin(num);
            break;
        case "cos":
            val = Math.cos(num);
            break;
        case "tg":
            val = (num % Math.PI) === (Math.PI/2)? "error": Math.tan(num);
            break;
        case "ctg":
            val = (num % Math.PI) === 0 ? "error" : 1/(Math.tan(num))
            break;            
    }
    res_var.textContent = val !== "error" ? val.toFixed(2) :"error";
}

sin.addEventListener("click", (event) =>{
    event.preventDefault()
    trigo("sin");
});
cos.addEventListener("click", (event) =>{
    event.preventDefault()
    trigo("cos");
});
tg.addEventListener("click", (event) =>{
    event.preventDefault()
    trigo("tg");
});
ctg.addEventListener("click", (event) =>{
    event.preventDefault()
    trigo("ctg");
});