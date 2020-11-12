/**
@file dato un array di obj iniziale, creiamo una copia dell’array di partenza
e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
una nuova proprietà position che contiene una lettera casuale.
Non dobbiamo modificare l’array iniziale
@author Giuseppe Perna <giuseppeperna.cg@gmail.com>
*/

// RUN CODE AFTER DOM
$(document).ready( function() {

  // CONSTANT VARIABLES
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

  // Array di partenza da non modificare
  const arrayObj = [
    {name: 'Poppy', type: 'tshirt', color: 'red'},
    {name: 'Jumping', type: 'occhiali', color: 'blue'},
    {name: 'CrissCross', type: 'scarpe', color: 'black'},
    {name: 'Jenny', type: 'borsa', color: 'pink'},
  ];
  console.log(arrayObj);

  /*Crea un nuovo array clone del precedente ed aggiunge ad ogni oggetto
  la proprietà position, il cui valore è una lettera casuale dell'alfabeto*/
  // const arrayObjMod = arrayObj.map(element => ({...element}));
  const arrayObjMod = arrayObj.map(element => ({...element, position:ALPHABET[Math.floor(Math.random() * ALPHABET.length)]}));

  console.log(arrayObjMod);

})
