// Code your solutions in this file

function writeCards(listFriends, celebratedDay){
    let gratitudeCard = [];
    for (let i=0; i<listFriends.length;i++){
      gratitudeCard.push(`Thank you, ${listFriends[i]}, for the wonderful ${celebratedDay} gift!`);
    }

    return gratitudeCard;
}



function countDown10 (startingNumber){
    let countDown = startingNumber;
    while (countDown >= 0) {
      console.log(countDown--);
    }
}