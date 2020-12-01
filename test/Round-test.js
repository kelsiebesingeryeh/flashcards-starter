const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {

  it('should be a function', () => {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return current card being played', () => {
    const card1 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], "array");
    const card2 = new Card(4,'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ["mutator method", "accessor method", "iteration method"], 'accessor method');
    const card3 = new Card(6, 'What is an example of a mutator method?', ["sort()", "map()", "join()"], 'sort()');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.equal(this.currentCard);
  })

  it('should create a new Turn instance when a guess is made', () => {
    const round = new Round();
    round.takeTurn();
    expect(round.takeTurn()).to.be.an.instanceof(Turn);
  });

  it('should update the turn count regardless if guess is correct or incorrect', () => {
    const round = new Round();
    round.takeTurn();
    expect(round.turns)to.equal(1);
  });

  it('should return the next card as the current card', () => {
    const round = new Round();
    round.takeTurn();
    expect(this.currentCard).to.equal() // the next card?
  });

  it('should add incorrect guesses to an array', () => {
    const round = new Round();
    round.takeTurn();
    expect(round.incorrectGuesses).to.deep.equal(['spleen']);
  });

  it('should return feedback on the guess', () => {
    const round = new Round;
    round.takeTurn();
    expect(round.)
  })

})
