// Code your solutions in this file

const people = [];
const eventType = "";
const thanksMessage = [];

function writeCards(people, eventType) {
    for(let i=0; i<people.length; i++) {
        thanksMessage.push(`Thank you, ${people[i]}, for the wonderful ${eventType} gift!`);
    }
    return thanksMessage;
}

//writeCards(['Lisa', 'Kaitlin', 'Jan'], "surprise");

let startFrom;

function countDown(startFrom) {
    while (startFrom >= 0) {
        console.log(startFrom--);
    }
}

countDown(10);

