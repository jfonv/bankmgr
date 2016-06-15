let id = require('uuid');

function Account(name, initBal){

  this.name = name;
  this.balance = initBal;
  this.num = id.v1();
  this.deposits = [initBal];
  this.withdrawals = [];
}


module.exports = {Account};
