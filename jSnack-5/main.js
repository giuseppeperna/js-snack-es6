/**
@file Partendo da un array semplice tipo:
var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente
@author Giuseppe Perna <giuseppeperna.cg@gmail.com>
*/

// RUN CODE AFTER DOM
$(document).ready( function() {

  // Array di nomi di persona
  const names = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
  console.log(names);

  // Chiede all'utente di inserire due numeri compresi tra lo 0 e la length dell'array names
  const pickNumber = []
  for (let i = 0; i < 2; i++){
    let askNumbers = parseInt(prompt(`Scegli un numero tra 0 e ${names.length}`));
    pickNumber.push(askNumbers)
  }
  console.log(pickNumber)

  /*Filtra l'array names per creare un secondo array, prendendone gli elementi
  che si trovano nella posizione compresa tra i due numeri inseriti dall'utente*/
  const chosenNames = names.filter((element, index) => {
      return index >= pickNumber[0] && index <= pickNumber[1]
  })
  console.log(chosenNames);

})
