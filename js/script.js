var MAX_TRY = 3;
var WIN_COUNTER = -1;
var game = document.getElementById('gameHTML');
var result = document.getElementById('resultHTML');
var gameState = false

function randomNum(min, max){
   return Math.floor(Math.random() * (max - min +1) + min );
}

var pcNumList = []; //array in cui inserire i numeri generati random

for (var i = 1; i <= 16; i++){  //sto impiegando troppo tempo per inserire il controllo sull'unicità dei numeri, continuo e ci ripenso dopo.
      pcNumList.push(randomNum(1,100));
   }
console.log(pcNumList);

var userNumberList = [];

for (var i = 1; i <= MAX_TRY; i++){
   WIN_COUNTER++
   var userNumber = parseInt(prompt("Inserisci un numero"));
   for (var j = 0; j < pcNumList.length; j++){
      if(pcNumList[j] == userNumber){
         i = MAX_TRY;
         var gameState = true
      }
   }
}

if (gameState == true){
   game.innerHTML = "Game over!";
   result.innerHTML = "Punteggio: " + WIN_COUNTER;
}
