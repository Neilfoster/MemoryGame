document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'donut-1',
        img: 'images/donut-1.png'
      },
      {
        name: 'donut-1',
        img: 'images/donut-1.png'
      },
      {
        name: 'donut-2',
        img: 'images/donut-2.png'
      },
      {
        name: 'donut-2',
        img: 'images/donut-2.png'
      },
      {
        name: 'donut-3',
        img: 'images/donut-3.png'
      },
      {
        name: 'donut-3',
        img: 'images/donut-3.png'
      },
      {
        name: 'donut-4',
        img: 'images/donut-4.png'
      },
      {
        name: 'donut-4',
        img: 'images/donut-4.png'
      },
      {
        name: 'donut-5',
        img: 'images/donut-5.png'
      },
      {
        name: 'donut-5',
        img: 'images/donut-5.png'
      },
      {
        name: 'donut-6',
        img: 'images/donut-6.png'
      },
      {
        name: 'donut-6',
        img: 'images/donut-6.png'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/tile-back.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      var cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/tile-back.png')
        cards[optionTwoId].setAttribute('src', 'images/tile-back.png')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/tile-blank.png')
        cards[optionTwoId].setAttribute('src', 'images/tile-blank.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/tile-back.png')
        cards[optionTwoId].setAttribute('src', 'images/tile-back.png')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
  