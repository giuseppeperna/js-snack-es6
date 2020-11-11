/**
@file Creare un oggetto che rappresenti un triangolo rettangolo,
con le seguenti proprietà: base e altezza.
Calcolare perimetro e area.
@author Giuseppe Perna <giuseppeperna.cg@gmail.com>
*/

// RUN CODE AFTER DOM
$(document).ready( function() {

  // Creazione oggetto triangle
  var triangle = {
    'base': 10,
    'altezza': 25
  };
  console.log(triangle);

  // Calcolo ipotenusa
  var ipotenusa = Math.sqrt(triangle.base ** 2 + triangle.altezza ** 2 );
  console.log("ipotenusa:", ipotenusa);
  // Calcolo perimetro
  var perimetro = triangle.base + triangle.altezza + ipotenusa;
  console.log("perimetro:", perimetro);
  // Calcolo area
  var area = (triangle.base * triangle.altezza) / 2;
  console.log("area:", area);

})
