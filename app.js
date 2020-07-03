document.addEventListener('DOMContentLoaded', () =>{

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

    const grid = document.querySelector('.grid') 
    var cardsChosen = []
    var cardsChosenID = []


//create your board
    function createBoard(){
        for(let i =0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/tile-blank.png')
            card.setAttribute('data-id', i)
 //           card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

// check for matches



// flip your card 
function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId.name])
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.lenght === 2) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard()







})