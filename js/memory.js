class MemoryGame {
  constructor(cards, pickedCards,pairsClicked,pairsGuessed) {
    this.cards = cards;
    

  this.pickedCards = pickedCards
  this.pairsClicked = pairsClicked
  this.pairsGuessed = pairsGuessed




  }

  shuffleCards(cards) {


    return shuffledArray = cards.sort(() => Math.random() - 0.5)
    


  }

  checkIfPair(card1, card2) {
    
      if(card1 === card2){
        this.pairsGuessed++
        return true
      }else{
        this.pairsClicked++

        return false
      }

  }

  checkIfFinished() {
    


return (this.cards.length + 1) * 2 === pairsGuessed


  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
