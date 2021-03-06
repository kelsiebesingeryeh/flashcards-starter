const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Deck', () => {
  let deck;
  let card1, card2, card3;

  beforeEach(() => {
    deck = new Deck();
    card1 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], "array");
    card2 = new Card(4, 'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ["mutator method", "accessor method", "iteration method"], 'accessor method');
    card3 = new Card(6, 'What is an example of a mutator method?', ["sort()", "map()", "join()"], 'sort()');
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should hold an array of cards by default', () => {
    deck = new Deck([card1, card2, card3]);
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should count the cards in the deck', () => {
    const deck = new Deck([card1, card2, card3]);
    expect(deck.countCards()).to.deep.equal(3);
  });
});