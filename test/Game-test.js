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

  beforeEach( () => {
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should create a new card in the deck', () => {
    game.start();
    expect(game.currentRound.deck.cards[0]).to.equal(card1);
  });

  it('should contain a deck', () => {
    game.start();
    expect(game.currentRound.deck).to.be.an.instanceof(Deck);
  });


})
