let expect = require('chai').expect;
let b = require('../lib/bank');
//require('../lib/account');

describe('bank', function(){
describe('Bank', function(){
  it('should create new bank', function() {
    const result = new a.Account('name', 400);
    expect(result.name).to.equal('name');
    expect(result.balance).to.equal(400);
    expect(result.num).is.not.undefined;
    expect(result.deposits).to.deep.equal([400]);
    expect(result.withdrawals).to.deep.equal([]);
  });
});
});
