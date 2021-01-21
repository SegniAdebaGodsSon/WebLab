let weight, height;

var calcBmi = function(weight, height){
    if(!(Number(weight) && Number(weight))) return 'invalid input';
    if(!height) return 'invalid input';

    let bmi =  weight / Math.pow( height, 2);
    bmi = bmi.toFixed(1);

    if(bmi < 18.5){
        return 'Underweight';

    }else if(bmi >= 18.5 && bmi <= 24.9){
        return 'Normal / Healthy weight';

    }else if(bmi >= 25 && bmi <= 29.9){
        return 'Overweight';

    }else{
        return 'Obese';
    }
}



console.log(calcBmi(89, ""))





















// (
//     function(){
//         console.log('BMI')
//         let input = prompt('Input your Weight and Height separated by space');
//         input = input.split(' ').map(el => Number(el));
//         alert(calcBmi(input[0], height[1]))
//     }
// )();