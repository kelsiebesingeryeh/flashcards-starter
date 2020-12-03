const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data.js');
const prototypeQuestions = data.prototypeData;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should create a new instance of a card when game starts', () => {
    game.start();
    expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card);
  });

  it('should have a deck when game starts', () => {
    game.start();
    expect(game.currentRound.deck).to.be.an.instanceof(Deck);
  });

  it('should create a new instance of a round when game starts', () => {
    game.start();
    expect(game.currentRound).to.be.an.instanceof(Round);
  });
});