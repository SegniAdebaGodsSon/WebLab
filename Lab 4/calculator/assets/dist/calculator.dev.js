"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mod = exports.div = exports.mult = exports.sub = exports.average = exports.add = void 0;

var add = function add(args) {
  args = args.map(function (el) {
    return Number.parseInt(el);
  });
  return args.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
};

exports.add = add;

var mult = function mult(args) {
  args = args.map(function (el) {
    return Number.parseInt(el);
  });
  return args.reduce(function (acc, curr) {
    return acc * curr;
  }, 1);
};

exports.mult = mult;

var average = function average(args) {
  args = args.map(function (el) {
    return Number.parseInt(el);
  });
  var sum = args.reduce(function (acc, curr) {
    return curr + acc;
  }, 0);
  return (sum / args.length).toFixed(1);
};

exports.average = average;

var sub = function sub(args) {
  args = args.map(function (el) {
    return Number.parseInt(el);
  });
  return args.reverse().reduce(function (acc, curr) {
    return curr - acc;
  }, 0);
};

exports.sub = sub;

var div = function div(x, y) {
  if (y === 0) return alert('invalid input');
  x = parseInt(x);
  y = parseInt(y);
  return x / y;
};

exports.div = div;

var mod = function mod(x, y) {
  x = parseInt(x);
  y = parseInt(y);
  return x % y;
};

exports.mod = mod;
console.log("=================== calculator.js ===================="); // (
//     function(){
//         let inputs;
//         // console.info('Choose an operation: \n', '\t1. Add\n\t2.Multiply\n\t3.Average\n\t4.Sub');
//         let operation = prompt('Choose an operation: 1.Add 2.Multiply 3.Average 4.Sub 5.Div');
//         switch(operation){
//             case '1':
//                 inputs = prompt('Enter values to be added s eparated by one space');
//                 alert(add(inputs.split(' ')))
//                 break;
//             case '2':
//                 inputs = prompt('Enter values to be multiplied separated by one space');
//                 alert(mult(inputs.split(' ')))
//                 break;    
//             case '3':
//                 inputs = prompt('Enter values to be averaged separated by one space');
//                 alert(average(inputs.split(' ')))
//                 break;
//             case '4':
//                 inputs = prompt('Enter values to be substracted separated by one space');
//                 alert(sub(inputs.split(' ')))
//                 break;    
//             case '5':
//                 inputs = prompt('Enter the nominator and the denominator separated by spaces')
//                 inputs = inputs.split(' ');
//                 alert(div(inputs[0], inputs[1]));
//                 break;
//             default:
//                 alert('Invalid input')        
//         }
//     }
// )()