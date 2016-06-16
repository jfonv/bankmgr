/* eslint-disable no-unused-expressions */

const expect = require('chai').expect;
const Account = require('../lib/account');

describe('Account', () => {
  describe('constructor', () => {
    it('should create new account', () => {
      const result = new Account('name');
      expect(result.name).to.equal('name');
      expect(result.balance).to.equal(0);
      expect(result.num).is.not.undefined;
      expect(result.deposits).to.deep.equal([]);
      expect(result.withdrawals).to.deep.equal([]);
    });
  });
  describe('#addDeposit', () => {
    it('should add a deposit', () => {
      const result = new Account('name');
      expect(result.addDeposit(300)).to.equal(300);
      expect(result.addDeposit(-200)).to.equal(300);
      expect(result.addDeposit(50)).to.equal(350);
      expect(result.deposits).to.deep.equal([300, 50]);
      expect(result.addDeposit('text')).to.equal(350);
    });
  });
  describe('#withdraw', () => {
    it('should make a withdrawal', () => {
      const result = new Account('name');
      result.addDeposit(300);
      result.addDeposit(150);
      expect(result.withdraw(50)).to.equal(400);
      expect(result.withdrawals).to.deep.equal([50]);
      expect(result.withdraw(500)).to.equal(400);
      expect(result.withdraw(-50)).to.equal(400);
      expect(result.withdraw('money')).to.equal(400);
      expect(result.withdraw(150)).to.equal(250);
      expect(result.withdrawals).to.deep.equal([50, 150]);
      expect(result.balance).to.equal(250);
      expect(result.withdraw(1.50)).to.equal(248.5);
    });
  });
});
