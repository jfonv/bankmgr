let expect = require('chai').expect;
let a = require('../lib/account');
//require('../lib/account');

describe('account', function(){
describe('Account', function(){
  it('should create new account', function() {
    const result = new a.Account('name', 400);
    expect(result.name).to.equal('name');
    expect(result.balance).to.equal(400);
    expect(result.num).is.not.undefined;
    expect(result.deposits).to.deep.equal([400]);
    expect(result.withdrawals).to.deep.equal([]);
  });
});
});
