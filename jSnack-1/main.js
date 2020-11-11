/** @file Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10
Attraverso un prompt dare la possibilità all’utente di
modificare il peso della palla.
@author Giuseppe Perna <giuseppeperna.cg@gmail.com>
*/


// RUN CODE AFTER DOM
$(document).ready( function() {

  // Creazione dell'oggetto ball
  const ball = {
    'nome': 'palla',
    'peso': 10
  };
  console.log(ball)

  // L'utente inserisce il nuovo valore della proprietà peso appartenente all'oggetto ball
  ball.peso = parseInt(prompt('Inserisci il peso della palla'));
  console.log(ball);
})
