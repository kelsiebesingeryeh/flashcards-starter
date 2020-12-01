const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn')

describe('Turn', () => {


  it('should be a function', () => {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn)
  });

  it('should be instantiated with two arguments', () => {
    const card = new Card(21, 'Which iteration method is best for DOM manipulation?', ["forEach()", "map()", "reduce()"], 'forEach()');
    const turn = new Turn('forEach()', card);
  });

  it('should return the guess', () => {
    const card = new Card(21, 'Which iteration method is best for DOM manipulation?', ["forEach()", "map()", "reduce()"], 'forEach()');
    const turn = new Turn('forEach()', card);
    turn.returnGuess();
    expect(turn.guess).to.equal('forEach()');
  });

  it('should return the card', () => {
    const card = new Card(21, 'Which iteration method is best for DOM manipulation?', ["forEach()", "map()", "reduce()"], 'forEach()');
    const turn = new Turn('forEach()', card);
    turn.returnCard();
    expect(turn.card).to.equal(card);
  });

  it('should return a boolean if users guess matches the correct answer on the card', () => {
    const card = new Card(21, 'Which iteration method is best for DOM manipulation?', ["forEach()", "map()", "reduce()"], 'forEach()');
    const turn = new Turn('forEach()', card);
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.be.a('boolean');
  });

 it('should give feedback on whether the guess is correct or not' , () => {
   const card = new Card(21, 'Which iteration method is best for DOM manipulation?', ["forEach()", "map()", "reduce()"], 'forEach()');
   const turn = new Turn('forEach()', card);
   turn.giveFeedback();
   expect(turn.giveFeedback()).to.equal('correct!' || 'incorrect!');
 });
});
