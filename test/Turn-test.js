const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn')
const Card = require('../src/Card')

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

  it('should be instantiated with two arguments', () => {
    const card = new Card(5, 'What is the largest state in the United States?', ['Alaska', 'Texas', 'California'], 'Alaska');
    const turn = new Turn('Alaska', card);
    expect(turn.returnGuess()).to.equal('Alaska')
  });

  it('should return the guess', () => {
    const card = new Card(5, 'What is the largest state in the United States?', ['Alaska', 'Texas', 'California'], 'Alaska');
    const turn = new Turn('Alaska', card);
    turn.returnGuess();
    expect(turn.returnGuess()).to.equal('Alaska');
  });

  it('should return the card', () => {
    const card = new Card(5, 'What is the largest state in the United States?', ['Alaska', 'Texas', 'California'], 'Alaska');
    const turn = new Turn('Alaska', card);
    turn.returnCard();
    expect(turn.returnCard()).to.equal(card);
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
