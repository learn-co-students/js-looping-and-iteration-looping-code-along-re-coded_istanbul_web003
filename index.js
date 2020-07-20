// Code your solutions in this file

function writeCards(names, event){
  let card = [];
  for (let i=0; i<names.length;i++){
    card.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return card;
}

writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");


function countDown() {
  let num=10;
  while (0<=num && num<11) {
    console.log(num--);
  };
  };
  
  countDown();

