const Turn = require('./Turn');
const Deck = require('./Deck');

//outstanding questions:
// 1. how do we get the currentCard to be the first card in the deck at the start of the round??
// 2. review the takeTurn method and test assertions for that
// 3.

class Round {
  constructor() {
    this.deck = new Deck();
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard = this.deck[0];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn() {
    const turn = new Turn();
    this.turns++;
    this.currentCard = this.deck[this.turns];
    const isCorrectGuess = turn.evaluateGuess(); // guess is evaluated/recorded. incorrect guesses will be stored via the id in an array of incorrect guesses
    if (!isCorrectGuess) {
      this.incorrectGuesses.push(turn.guess)
    }
    // turn.giveFeedback();
    // feedback is returned regarding whether the guess is incorrect or correct.
    return turn;
  }
  calculatePercentCorrect() {
    this.incorrectGuesses.length / this.turns;
    // method that calculates and returns the percentage of correct guesses
    // something that counts the length of the array and divides by the total amount of turns
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()} % of the questions correctly!`;
  }
}

module.exports = Round;
