"use strict";

var _calculator = require("../../calculator/assets/calculator.js");

var keys = document.querySelector('.keys');
var display = document.querySelector('.result');
keys.addEventListener('click', function (e) {
  if (e.target.textContent !== "=" && e.target.textContent !== "C" && e.target.textContent !== "Pow" && e.target.textContent !== "sqrt" && e.target.textContent !== "<--") {
    display.textContent += e.target.textContent;
  }

  if (e.target.textContent === "C") {
    display.textContent = "";
  }

  if (e.target.textContent === "=") {
    var ans = evaluate(display.textContent);

    if (ans === Number.POSITIVE_INFINITY) {
      ans = "Invalid Input!";
    }

    display.textContent = ans;
  }

  if (e.target.textContent === "Pow") {
    display.textContent = Math.pow(parseInt(display.textContent), 2);
  }

  if (e.target.textContent === "sqrt") {
    display.textContent = Math.sqrt(parseInt(display.textContent)).toFixed(1);
  }

  if (e.target.textContent === "<--") {
    var arr = display.textContent.split("");
    console.log(arr);
    arr.pop();
    display.textContent = arr.join("");
  }
});

var evaluate = function evaluate(strEquation) {
  if (strEquation.includes('+')) {
    return (0, _calculator.add)(strEquation.split('+'));
  } else if (strEquation.includes('-')) {
    return (0, _calculator.sub)(strEquation.split('-'));
  } else if (strEquation.includes('×')) {
    return (0, _calculator.mult)(strEquation.split('×'));
  } else if (strEquation.includes('÷')) {
    var x = strEquation.split('÷')[0],
        y = strEquation.split('÷')[1];
    return (0, _calculator.div)(x, y);
  } else if (strEquation.includes('%')) {
    var _x = strEquation.split('%')[0],
        _y = strEquation.split('%')[1];
    return (0, _calculator.mod)(_x, _y);
  }
};