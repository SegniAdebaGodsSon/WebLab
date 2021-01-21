/* class bank{
    constructor(){

    }

    deposit(){

    }

    withdrawal(){

    }

    balance(){

    }

    transfer(){

    }
} */


let bank = {
    record: [1,2,3],
    minToWithdraw: 100,
    deposit: function(val) {
        this.record.push(val);
    },

    withdrawal: function(val) {
        if(this.balance() < 0 || val < this.minToWithdraw || this.record.length ===0) return alert('Balance too low or deposit size too low');
        this.record.push(-1*val);

    },
    balance: function(){
        let count = this.record.map(rec=>Number(rec)).reduce((acc, curr) => acc+curr, 0);
        return count;
    },

    transfer: function (val) {
        if(this.balance() < 0 || this.balance < this.minToWithdraw) return alert('Balance too low');
        this.record.push(-1*val);
    },
    printBalance: function() {
        alert('Your current balance is', this.balance());
    
    }
}
// (
// function(){
//         let input;
//         let operation = prompt('Choose an operation: 1.deposit 2.withdraw 3.balance 4.transfer');
//         switch(operation){
//             case '1':
//                 input = prompt('Enter amount to be deposited');
//                 bank.deposit(input);
//                 alert('Your current balance is ' + bank.balance());
//                 break;
    
//             case '2':
//                 input = prompt('Enter amount to be withdrawn');
//                 bank.withdrawal(input)
//                 alert('Your current balance is ' + bank.balance());
//                 break;  
        
//             case '3':
//                 alert('Your current balance is ' + bank.balance());
//                 break;
                    
//             case '4':
//                 input = prompt('Enter amount to be transferred out');
//                 bank.transfer(input);
//                 alert('Your current balance is ' + bank.balance());
//                 break;   
//             default:
//                 alert('Invalid input');        
//         }
// }    
// )();
