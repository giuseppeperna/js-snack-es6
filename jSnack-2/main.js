/** @file Creare un array di oggetti: ogni oggetto descriverà una bici
da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

@author Giuseppe Perna <giuseppeperna.cg@gmail.com>
*/

// RUN CODE AFTER DOM
$(document).ready( function() {

  // Array di oggetti bicycle
  const bicycles = [
    {
      nome:'merida',
      peso: 10
    },
    {
      nome:'trek',
      peso: 15
    },
    {
      nome:'kona',
      peso: 9
    }
  ];

  // Ordina l'array in base alla proprietà peso dell'oggetto bicycle, in modo crescente.
  let bicyclesOrder = bicycles.sort((a, b) => a.peso - b.peso);
  console.log(bicyclesOrder);

  // Stampa a schermo il primo elemento dell'array di oggetti bicycle, con peso minore rispetto agli altri
  const [lightBicycle] = bicycles;
  console.log(lightBicycle);
  for (let key in lightBicycle) {
      $('body').append(`<h1> ${key}: ${lightBicycle[key]} </h1>`);
    }
})
