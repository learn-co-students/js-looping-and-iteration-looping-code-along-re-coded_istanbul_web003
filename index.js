// Code your solutions in this file

function writeCards(namesArray, eventName) {
    const thankingArray = []
    for(let i=0; i<namesArray.length; i++){
       thankingArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`)
    }
    return thankingArray
}

function countDown(num) {
    let downNum = num
    while (downNum >= 0){
        console.log(downNum)
        downNum--
    }
}