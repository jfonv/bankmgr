let expect = require('chai').expect;
let Bank = require('../lib/bank');
//require('../lib/account');

describe('Bank', function(){
describe('constructor', function(){
  it('should create new bank', function() {
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
