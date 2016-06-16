/* eslint-disable no-unused-expressions */

const expect = require('chai').expect;
const Bank = require('../lib/bank');
const Account = require('../lib/account');

describe('Bank', () => {
  describe('constructor', () => {
    it('should create new bank', () => {
      const result = new Bank('name');
      expect(result.name).to.equal('name');
      expect(result.accounts).to.deep.equal([]);
    });
  });
  describe('#addAccount', () => {
    it('should add a new account', () => {
      const result = new Bank('name');
      result.addAccount(new Account('joe'));
      result.addAccount(new Account('rich'));
      expect(result.accounts[0].name).to.equal('joe');
      expect(result.accounts[1].name).to.equal('rich');
      expect(result.accounts).to.be.length(2);
    });
  });
  describe('#getValue', () => {
    it('should get the values of the banks accounts', () => {
      const result = new Bank('name');
      expect(result.getValue()).to.equal(0);
      const a1 = new Account('joe');
      const a2 = new Account('rich');
      a1.addDeposit(50);
      a1.addDeposit(4000);
      a2.addDeposit(40);
      result.addAccount(a1);
      result.addAccount(a2);
      expect(result.getValue()).to.equal(4090);
    });
  });
  describe('#timeTravel', () => {
    it('should travel through the ages', () => {
      const result = new Bank("Whoville's Travelling Bank");
      expect(result.getValue()).to.equal(0);
      expect(result.timeTravel(1492)).to.equal('Cristoforo Colombo');
      expect(result.timeTravel(1957)).to.equal('Sputnik');
      expect(result.timeTravel(1)).to.equal('Babby Jesus');
      expect(result.timeTravel(2016)).to.equal('Welcome Home');
      expect(result.timeTravel(1960)).to.equal('lost in time');
      expect(result.timeTravel()).to.equal('lost in time');
    });
  });
});
