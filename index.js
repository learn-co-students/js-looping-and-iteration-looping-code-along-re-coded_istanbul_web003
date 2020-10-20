// Code your solutions in this file

function writeCards (arr,str) {
    let resultArr = []
    for (let i=0; i<arr.length; i++) {
        resultArr.push(`Thank you, ${arr[i]}, for the wonderful ${str} gift!`)
    }
    return resultArr
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown (x) {
    let i = x
    while(i>=0){
        console.log(i);
        i--
    }
}

countDown(10)