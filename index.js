const gifts = ["Ada", "Brendan", "Ali"];
 
function writeCards(string names,event name) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`thank you, ${gifts[i]} for the wonderful birthday gift!`);
  }
 
  return gifts;
};
 
writeCards(gifts);
