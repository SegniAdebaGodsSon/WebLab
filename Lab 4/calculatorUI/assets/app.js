import {add, sub, mult, div, mod} from '../../calculator/assets/calculator.js'

let keys = document.querySelector('.keys');
let display = document.querySelector('.result')


keys.addEventListener('click', e => {
    if(e.target.textContent !== "=" && e.target.textContent !== "C" && e.target.textContent !== "Pow" && e.target.textContent !== "sqrt" && 
    e.target.textContent !== "<--" ){
        display.textContent += e.target.textContent;
    }
    if(e.target.textContent === "C"){
        display.textContent = "";   
    }

    if(e.target.textContent === "="){
        let ans = evaluate(display.textContent);
        if(ans === Number.POSITIVE_INFINITY) {ans="Invalid Input!"}
        display.textContent = ans;
    }

    if(e.target.textContent === "Pow"){
        display.textContent = Math.pow(parseInt(display.textContent), 2);
    }

    if(e.target.textContent === "sqrt"){
        display.textContent = Math.sqrt(parseInt(display.textContent)).toFixed(1)
    }

    if(e.target.textContent === "<--"){
        let arr = display.textContent.split("")
        console.log(arr)
        arr.pop()
        display.textContent = arr.join("")
    }

});


let evaluate = (strEquation) => {
    if(strEquation.includes('+')){
        return add(strEquation.split('+'));
    }else if(strEquation.includes('-')){
        return sub(strEquation.split('-'));
    }else if(strEquation.includes('×')){
        return mult(strEquation.split('×'))
    }else if(strEquation.includes('÷')){
        let x = strEquation.split('÷')[0], y = strEquation.split('÷')[1];
        return div(x, y)
    }else if(strEquation.includes('%')){
        let x = strEquation.split('%')[0], y = strEquation.split('%')[1];
        return mod(x, y)

    }
}