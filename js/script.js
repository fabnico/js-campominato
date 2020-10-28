var MAX_TRY = 2;
var WIN_COUNTER = 0;
var game = document.getElementById('gameHTML');
var result = document.getElementById('resultHTML');
var gameState = false;

function randomNum(min, max){
   return Math.floor(Math.random() * (max - min +1) + min );
}

function addUserList(number){ // Aggiunge il numero dell'utente ad un array
   return userNumberList.push(number);
}

var pcNumList = []; //array in cui inserire i numeri generati random

for (var i = 1; i <= 16; i++){  //sto impiegando troppo tempo per inserire il controllo sull'unicità dei numeri, continuo e ci ripenso dopo.
      pcNumList.push(randomNum(1,100));
   }
console.log(pcNumList);

var userNumberList = [];  //array in cui inserire i numeri dell'utente

for (var i = 1; i <= MAX_TRY; i++){
   WIN_COUNTER++;
   var userNumber = parseInt(prompt("Inserisci un numero"));
   if(userNumberList.includes(userNumber)){
      console.log("Hai già inserito questo numero, prova con un altro")
      i--;
      WIN_COUNTER--;
   }else{
      addUserList(userNumber)
   }
   console.log(userNumberList)
   for (var j = 0; j < pcNumList.length; j++){
      if(pcNumList[j] == userNumber){
         i = MAX_TRY;
         WIN_COUNTER--;
         var gameState = true;
      }
      if(i == MAX_TRY){
         var gameState = true;
      }
   }
}

if (gameState == true){
   game.innerHTML = "Game over!";
   result.innerHTML = "Punteggio: " + WIN_COUNTER;
}
