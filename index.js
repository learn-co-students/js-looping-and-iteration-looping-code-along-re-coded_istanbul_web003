const names = ["Ada", "Brendan", "Ali"];
const event = 'birthday';

function writeCards(names, event) {
   const birthdayCards= []
  for (let i = 0; i < names.length; i++) {
    birthdayCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
   
  }
  return birthdayCards
}


console.log (writeCards(names,event));



function countDown(i) {
    while ( i >= 0) {
      console.log(i);
      return countDown(i - 1);
    }
  }
  
  countDown(10)
  
  
  