import { assert as _assert, should, expect } from 'chai';
var assert = _assert;

/**********Aspect Check ************ */

describe('------ Aspect Check -----', function() {
  let userName = 'Test User';
  it('check string', function(){
    assert.typeOf(userName, 'string')
  })

  it('equal match',()=>{
    assert.equal(userName,'Test User')
  })
})


/***************Should **************** */
/* describe('------Should Check-----', ()=>{
  let userName = 'Test User'
  it('equal check', ()=>{
    userName.should.be.a('string')
    // userName.should.be.a('string');
  })
}); */


/********EXPECT**************** */
describe('-------Expect Check', ()=>{
  let userName ='Test User';
  it('string match', ()=>{
    expect(userName).to.be.a('string')
  })
})