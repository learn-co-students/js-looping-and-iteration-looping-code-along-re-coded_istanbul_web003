// Code your solutions in this file
function writeCards(a,b){
    const array = []
    for(let i = 0;i<a.length;i++){
        array.push("Thank you, " +a[i]+ ", for the wonderful " +b+ " gift!");
    }
    return(array);
}


function countDown(c){
while(c>=0){
    console.log(c);
    c-=1;
}
}