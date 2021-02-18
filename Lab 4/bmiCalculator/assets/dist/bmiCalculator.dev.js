"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var weight, height;

var calcBmi = function calcBmi(weight, height) {
  if (!(Number(weight) && Number(weight))) return 'invalid input';
  if (!height) return 'invalid input';
  var bmi = weight / Math.pow(height, 2);
  bmi = bmi.toFixed(1);

  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return 'Normal / Healthy weight';
  } else if (bmi >= 25 && bmi <= 29.9) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
};

console.log(calcBmi(89, ""));
var input = prompt('Enter your weight and height separated by a space');

var _input$split = input.split(" ");

var _input$split2 = _slicedToArray(_input$split, 2);

height = _input$split2[0];
weight = _input$split2[1];
height = parseInt(height);
weight = parseInt(weight);
alert("Your status: ".concat(calcBmi(weight, height))); // (
//     function(){
//         console.log('BMI')
//         let input = prompt('Input your Weight and Height separated by space');
//         input = input.split(' ').map(el => Number(el));
//         alert(calcBmi(input[0], height[1]))
//     }
// )();