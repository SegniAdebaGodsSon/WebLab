let add = (args) => {
    args = args.map(el => Number.parseInt(el))
    return args.reduce((acc, curr) => acc+curr, 0);
}

let mult = (args) => {
    args = args.map(el => Number.parseInt(el))
    return args.reduce((acc, curr) => acc*curr , 1);
}

let average = (args) => {
    args = args.map(el => Number.parseInt(el))
    let sum = args.reduce((acc, curr) => curr+acc, 0);
    return (sum / args.length).toFixed(1);
}


let sub = (args) => {
    args = args.map(el => Number.parseInt(el))
    return args.reverse().reduce((acc, curr) => curr-acc, 0);
}

let div = (x, y) => {
    if(y===0) return alert('invalid input')
    x=parseInt(x); 
    y = parseInt(y);
    return x/y;
}

let mod = (x, y) => {
    x = parseInt(x)
    y = parseInt(y)
    return x % y;
}

console.log("=================== calculator.js ====================");
// (
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

 export {add, average, sub, mult, div, mod};