/* eslint-disable func-names */
function Bank(inName) {
  this.name = inName;
  this.accounts = [];
}

Bank.prototype.addAccount = function (inAccount) {
  this.accounts.push(inAccount);
};

Bank.prototype.getValue = function () {
  return this.accounts.reduce((a, n) => a + n.balance, 0);
};

Bank.prototype.timeTravel = function (year) {
  let retVal = 'lost in time';

  switch (year) {
    case 1492:
      retVal = 'Cristoforo Colombo';
      break;
    case 1957:
      retVal = 'Sputnik';
      break;
    case 1:
      retVal = 'Babby Jesus';
      break;
    case 2016:
      retVal = 'Welcome Home';
      break;
    default:
      break;
  }

  return retVal;
};

module.exports = Bank;
