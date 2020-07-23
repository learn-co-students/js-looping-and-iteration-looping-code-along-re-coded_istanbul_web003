
const num = 10;
function countDown(num){

    for(let i = num; i >= 0; i--){
        console.log(i);
    }

}



function writeCards(name){

    let array = [];

    for(let i = 0; i < name.length; i++){

        
        let message = "Thank you, " + name[i] + ", for the wonderful surprise gift!";

        array.push(message);
    }

    return array;
}