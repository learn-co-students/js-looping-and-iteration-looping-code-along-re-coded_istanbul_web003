const cards = ['Lisa', 'Kaitlin', 'Jan'];

function writeCards(cards, eventName) {
    let myMessages = []
    for (let i = 0; i < cards.length; i++) {
        myMessages.push(`Thank you, ${cards[i]}, for the wonderful ${eventName} gift!`)
    }
    return myMessages;
}


function countDown(n) {
    while (n >= 0) {
        console.log(n--);
    }  
}
countDown(10);