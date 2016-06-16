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

module.exports = Bank;
