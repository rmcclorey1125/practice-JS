// function isValidPassword(username, password){
//     if(password.length < 8){
//         return false
//     }
//     if(password.indexOf(' ') !== -1){
//         return false
//     }
//     if(password.indexOf(username) !== -1){
//         return false
//     }
//     return true
// }

// function avg (arr){
//     let total = 0
//     for(let num of arr){
//         total += num 
//     }
//     return total/arr.length 
// }

// function isPangram(str){
//     let lowerCased = str.toLowerCase()
//     for(let char of 'abcdefghijklmnopqrstuvwxyz'){
//         if(lowerCased.indexOf(char) === -1){
//             return false
//         }
//     }
//     return true
// }

// function pick(arr){
//     const idx = Math.floor(Math.random() * arr.length) 
//     return arr[idx]
// }

// function getCard(){
//     const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
//     const suits = ['clubs', 'spades', 'hearts', 'diamonds']

//     return {value: pick(values), suit: pick(suits)}
// }


const makeDeck = () => {
    return {
        deck: [],
        drawnCards: [],
        suits: ['clubs', 'spades', 'hearts', 'diamonds'],
        values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
        initializeDeck() {
            const {suits, values, deck} = this
            for(let value of values.split(',')){
                for(let suit of suits){
                    deck.push({
                        value,
                        suit
                    })
                }
            }
        },
        drawCard(){
            const card = this.deck.pop()
            this.drawnCards.push(card)
            return card
        },
        drawMultiple(numCards){
            for(let i = 0; i < numCards; i++){
                numCards.push(this.drawCard())
            }
            return cards
        },
        shuffle() {
            const {deck} = this
            for(let i = deck.length - 1; i > 0; i--){
                let j = Math.floor(Math.random() * (i + 1));
                [deck[i], deck[j]] = [deck[j], deck[i]];
            }
        }
    }
}

const myDeck = makeDeck()