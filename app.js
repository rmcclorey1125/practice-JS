function isValidPassword(username, password){
    if(password.length < 8){
        return false
    }
    if(password.indexOf(' ') !== -1){
        return false
    }
    if(password.indexOf(username) !== -1){
        return false
    }
    return true
}

function avg (arr){
    let total = 0
    for(let num of arr){
        total += num 
    }
    return total/arr.length 
}

function isPangram(str){
    let lowerCased = str.toLowerCase()
    for(let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(lowerCased.indexOf(char) === -1){
            return false
        }
    }
    return true
}

function pick(arr){
    const idx = Math.floor(Math.random() * arr.length) 
    return arr[idx]
}

function getCard(){
    const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
    const suits = ['clubs', 'spades', 'hearts', 'diamonds']

    return {value: pick(values), suit: pick(suits)}
}