import {expect} from 'chai';

describe('Sample Test Suite', function() {
  it('should pass this test', function() {
    expect(1 + 1).to.equal(2);
  });

  it('should pass another test', function() {
    expect('hello').to.be.a('string');
  });
});
