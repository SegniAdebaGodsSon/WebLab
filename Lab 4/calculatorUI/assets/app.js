import {add, average, sub, mult, div} from '../../calculator/assets/calculator.js'

let keys = document.querySelector('.keys');
let display = document.querySelector('.result')


keys.addEventListener('click', e => {
    if(e.target.textContent !== "=" && e.target.textContent !== "C"){
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
    }
}