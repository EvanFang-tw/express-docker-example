const expect = require('chai').expect;
const msgHelper = require('../src/helpers/msgHelper');

describe('msgHelper', () => {
  it('should work', () => {
    expect(msgHelper.getMsg()).equals('hello, world');
  });
});