// funzione per generare numeri casuali

function numRandom(min, max) {
  var numRandom = Math.floor(Math.random() * (max - min + 1) + min);
  return numRandom;
}

// funzione per controllare che un numero non esca uguale

function inArray(array, elemento) {
  var i = 0;
  var trovato = false;

  while (i < array.length && trovato == false) {
    if (array[i] == elemento) {
      trovato = true;
    }
    i++;
  }
  return trovato;
}

// genero i 5 numeri all'inizio del gioco
var numeriGioco = [];
var numeroCasuale;
while (numeriGioco.length < 5) {
  numeroCasuale = numRandom(1, 100);
  if (!inArray(numeriGioco, numeroCasuale)) {
   numeriGioco.push(numeroCasuale);
 }
}
alert(numeriGioco);

/* avvio il countdown e chiedo all'utente di inziare a giocare i suoi numeri
*/
var numVincenti = [];
var numUtenteGiocati = [];
var numCount = 5;
var countDown = setInterval( function() {
  console.log(numCount);
  if (numCount === 0) {
    clearInterval(countDown);
    alert("Adesso prova a inserire i numeri che ti ricordi! Clicca su Ok");
    for ( i=0; i < 5; i++ ) {
      var provaUtente = parseInt(prompt("Prova a inserire un numero!"));
      if (!inArray(numUtenteGiocati, provaUtente)) {
       numUtenteGiocati.push(provaUtente);
      }
    //   if (inArray(numeriGioco, provaUtente)) {
    //    numVincenti.push(provaUtente);
    // }
  }
  alert ("I numeri generati erano: " + numeriGioco + " e quelli che hai giocato erano: " +numUtenteGiocati + ". I numeri che hai azzeccato sono: " + numVincenti);
}
  numCount = numCount - 1;
}, 1000);
