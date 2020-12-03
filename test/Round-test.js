const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let card1, card2, card3;
  let deck;
  let round;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should start with the first card in the deck', () => {
    expect(round.currentCard).to.be.equal(card1);
  });

  it('should return current card being played', () => {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('should update the turn count after each guess', () => {
    round.takeTurn('pug');
    expect(round.turns).to.equal(1);
  });

  it('should return the next card as the current card', () => {
    round.takeTurn('pug');
    expect(round.currentCard).to.deep.equal(card2);
  });

  it('should add incorrect guesses to an array', () => {
    round.takeTurn('pug');
    expect(round.incorrectGuesses.length).to.deep.equal(1);
  });

  it('should return feedback on the guess', () => {
    expect(round.takeTurn('sea otter')).to.equal('correct!');
  });

  it('should return feedback on the guess', () => {
    expect(round.takeTurn('pug')).to.equal('incorrect!');
  });

  it('should calculate the percentage of correct guesses', () => {
    round.takeTurn('pug');
    round.takeTurn('gallbladder');
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('should end the round', () => {
    round.takeTurn('pug');
    round.takeTurn('gallbladder');
    expect(round.endRound()).to.equal('** Round over! ** You answered 50% of the questions correctly!');
  });
});