"use strict";

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
var bank = {
  record: [1, 2, 3],
  minToWithdraw: 10,
  deposit: function deposit(val) {
    this.record.push(val);
  },
  withdrawal: function withdrawal(val) {
    if (this.balance() < 0 || val < this.minToWithdraw || this.record.length === 0) return alert('Balance too low or deposit size too low');
    this.record.push(-1 * val);
  },
  balance: function balance() {
    var count = this.record.map(function (rec) {
      return Number(rec);
    }).reduce(function (acc, curr) {
      return acc + curr;
    }, 0);
    return count;
  },
  transfer: function transfer(val) {
    if (this.balance() < 0 || this.balance < this.minToWithdraw) return alert('Balance too low');
    this.record.push(-1 * val);
  },
  printBalance: function printBalance() {
    alert('Your current balance is', this.balance());
  }
};

var a = function a() {
  var input,
      loop = true;

  do {
    var operation = prompt('Choose an operation: 1.deposit 2.withdraw 3.balance 4.transfer q.quit');

    switch (operation) {
      case '1':
        input = prompt('Enter amount to be deposited');
        bank.deposit(input);
        alert('Your current balance is ' + bank.balance());
        break;

      case '2':
        input = prompt('Enter amount to be withdrawn');
        bank.withdrawal(input);
        alert('Your current balance is ' + bank.balance());
        break;

      case '3':
        alert('Your current balance is ' + bank.balance());
        break;

      case '4':
        input = prompt('Enter amount to be transferred out');
        bank.transfer(input);
        alert('Your current balance is ' + bank.balance());
        break;

      case 'q':
        loop = false;
        break;

      default:
        alert('Invalid input');
    }
  } while (loop);
};

a();