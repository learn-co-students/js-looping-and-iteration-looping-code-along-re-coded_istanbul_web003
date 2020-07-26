function writeCards(names, event) {
    let thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
        let thankYoumessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        thankYouMessages.push(thankYoumessage);
    }

    return thankYouMessages;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(number){
    while (number >= 0) {
        console.log(number--);
    }
}

countDown(10);