const Turn = require('./Turn');

//outstanding questions:
// 1. how do we get the currentCard to be the first card in the deck at the start of the round??
// 2. review the takeTurn method and test assertions for that
// 3. 

class Round {
  constructor() {
    this.deck = new Deck();
    this.turns = 0;
    this.currentCard = //current card?
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    //method that return the current card being played.
    return this.currentCard;
  }

  takeTurn() {
    const turn = new Turn(); //when a guess is made, create new Turn instance
    this.turns++;
    this.returnCurrentCard(); //next card becomes the current card
    turn.evaluateGuess(); // guess is evaluated/recorded. incorrect guesses will be stored via the id in an array of incorrect guesses
    if (!turn.evaluateGuess()) {
      this.incorrectGuess.push(turn.guess)
    }
    turn.giveFeedback();
    // feedback is returned regarding whether the guess is incorrect or correct.
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
