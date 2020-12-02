const Turn = require('./Turn');
const Deck = require('./Deck');
const Card = require('./Card');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard = this.deck.cards[0];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard);
    this.turns++;
    this.currentCard = this.deck.cards[this.turns];
    const isCorrectGuess = turn.evaluateGuess();
    if (!isCorrectGuess) {
      this.incorrectGuesses.push(guess)
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let numberCorrect = this.turns - this.incorrectGuesses.length;
    return (numberCorrect / this.turns) * 100;
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;
