var MAX_TRY = 2;
var WIN_COUNTER = 0;

var game = document.getElementById('gameHTML');
var result = document.getElementById('resultHTML');

var gameStatus = false;
var victory = false;
var pcNumList = []; //array in cui inserire i numeri generati random
var userNumberList = [];  //array in cui inserire i numeri dell'utente

function randomNum(min, max){
   return Math.floor(Math.random() * (max - min +1) + min );
}

function addUserList(number, array){
   return array.push(number);
}

while(pcNumList.length < 16){ // Aggiunge i numeri random non doppioni ad un array
   var r = randomNum(1,16)
   if (!pcNumList.includes(r)){
      pcNumList.push(r)
   }
}
console.log(pcNumList);


for (var i = 1; i <= MAX_TRY; i++){
   WIN_COUNTER++;
   var userNumber = parseInt(prompt("Inserisci un numero"));
   if(userNumberList.includes(userNumber)){
      alert("Hai già inserito questo numero")
      i--;
      WIN_COUNTER--;
   }else{
      addUserList(userNumber, userNumberList)
   }
   console.log(userNumberList)
   for (var j = 0; j < pcNumList.length; j++){
      if(pcNumList[j] == userNumber){
         i = MAX_TRY;
         WIN_COUNTER--;
         var gameStatus = true;
      }
      if(i == MAX_TRY){
         var victory = true;
      }
   }
}

if (gameStatus == true){
   game.innerHTML = "Game over!";
   result.innerHTML = "Punteggio: " + WIN_COUNTER;
}

if (victory == true && gameStatus == false){
   game.innerHTML = "Complimenti! Hai vinto.";
   result.innerHTML = "Punteggio: " + WIN_COUNTER;

}
