class MemoryGame {
  constructor(someCards) {
    this.cards = someCards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsGuessed = 0;
    this.pairsClicked = 0;
    this.shuffleCards();
  }
  shuffleCards() {
    let len = this.cards.length;
    while (len > 0) {
      len--;
      let temp = this.cards[len];
      let rdmInd = Math.floor(Math.random() * len);
      this.cards[len] = this.cards[rdmInd];
      this.cards[rdmInd] = temp;
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      this.isFinished();
      return true;
    }
    return false;
  }
  isFinished() {
    if (this.pairsGuessed === 2) {
      document.querySelector("#memory_board").innerHTML = "";
      let h1 = document.createElement("h1");
      h1.style.color = "pink";
      h1.innerHTML = "YOU WON!!!";
      document.querySelector("#memory_board").appendChild(h1);
    }
  }
}