const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn')

describe('Turn', () => {
  let turn;
  let card;

  beforeEach( () => {
    turn = new Turn('Alaska', card);
    card = new Card(5, 'What is the largest state in the United States?', ['Alaska', 'Texas', 'California'], 'Alaska');
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn)
  });

  it.skip('should be instantiated with two arguments', () => {
    const turn = new Turn('Alaska', card);
    expect(turn).to.equal('Alaska', card) //test should be length of two - two things we are passing through
  });

  it('should return the guess', () => {
    turn.returnGuess();
    expect(turn.guess).to.equal('Alaska');
  });

  it('should return the card', () => {
    const turn = new Turn('Alaska', card); // failed when I didn't have the instantiation
    turn.returnCard();
    expect(turn.card).to.equal(card);
  });

  it('should return a boolean if users guess matches the correct answer on the card', () => {
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.be.a('boolean');
  });

 it('should give feedback on whether the guess is correct or not' , () => {
   turn.giveFeedback();
   expect(turn.giveFeedback()).to.equal('correct!' || 'incorrect!');
 });
});
