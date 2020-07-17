// Code your solutions in this file

const event = 'surprise';
const name = ['Lisa', 'Kaitlin', 'Jan'];
const writeCards = (name, event) => {
    let cards = [];
    for (let i=0; i < name.length; i++) {
       cards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
}

let countDown = (int) => {
    while (int >= 0) {
        console.log(int);
        int--;
    }
}
countDown(4);
   