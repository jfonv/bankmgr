/* eslint-disable func-names */
const id = require('uuid');

function Account(name) {
  this.name = name;
  this.balance = 0;
  this.num = id.v1();
  this.deposits = [];
  this.withdrawals = [];
}

Account.prototype.addDeposit = function (inVal) {
  const retVal = inVal * 1;

  if (isNaN(retVal) || retVal <= 0) {
    return this.balance;
  }
  this.deposits.push(retVal);
  this.balance += retVal;

  return this.balance;
};

Account.prototype.withdraw = function (inVal) {
  const retVal = inVal * 1;

  if (isNaN(retVal) || retVal <= 0) {
    return this.balance;
  }

  if (this.balance < inVal) {
    return this.balance;
  }

  this.withdrawals.push(retVal);
  this.balance -= retVal;

  return this.balance;
};

module.exports = Account;
