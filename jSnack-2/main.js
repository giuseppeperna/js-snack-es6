/** @file Creare un array di oggetti: ogni oggetto descriverà una bici
da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
@author Giuseppe Perna <giuseppeperna.cg@gmail.com>
*/

// RUN CODE AFTER DOM
$(document).ready( function() {

  // Array di oggetti bicycle
  const bicycles = [
    {
      'nome':'merida',
      'peso': 10
    },
    {
      'nome':'trek',
      'peso': 15
    },
    {
      'nome':'kona',
      'peso': 9
    }
  ];

  // Ordina l'array in base alla proprietà peso dell'oggetto bicycle, in modo crescente.
  let bicyclesOrder = bicycles.sort((a, b) => a.peso - b.peso);
  console.log(bicyclesOrder);

  // Stampa a schermo il primo elemento dell'array di oggetti bicycle, con peso minore rispetto agli altri
  for (let i = 0; i < 1; i++) {
    for (let key in bicycles[0]) {
      $('body').append(`<h1> ${key}: ${bicycles[i][key]} </h1>`);
    }
  }
})
