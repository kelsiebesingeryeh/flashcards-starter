const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let turn;
  let card;

  beforeEach(() => {
    turn = new Turn('Alaska', card);
    card = new Card(5, 'What is the largest state in the United States?', ['Alaska', 'Texas', 'California'], 'Alaska');
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return the guess', () => {
    expect(turn.returnGuess()).to.equal('Alaska');
  });

  it('should return the card', () => {
    const card = new Card(5, 'What is the largest state in the United States?', ['Alaska', 'Texas', 'California'], 'Alaska');
    const turn = new Turn('Alaska', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should return if a users guess matches the correct answer on the card', () => {
    const turn1 = new Turn('Alaska', card);
    const turn2 = new Turn('Texas', card);
    expect(turn1.evaluateGuess()).to.be.true;
    expect(turn2.evaluateGuess()).to.be.false;
  });

  it('should give feedback on whether the guess is correct or not', () => {
    const turn1 = new Turn('Alaska', card);
    const turn2 = new Turn('Texas', card);
    expect(turn1.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });
});