/* eslint-disable no-unused-expressions */

const expect = require('chai').expect;
const Bank = require('../lib/bank');

describe('Bank', () => {
  describe('constructor', () => {
    it('should create new bank', () => {
      const result = new Bank('name');
      expect(result.name).to.equal('name');
      /*
      expect(result.name).to.equal('name');
      expect(result.balance).to.equal(400);
      expect(result.num).is.not.undefined;
      expect(result.deposits).to.deep.equal([400]);
      expect(result.withdrawals).to.deep.equal([]);*/
    });
  });
});
