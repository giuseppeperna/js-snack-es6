/**
@file Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà:
nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre
saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
punti fatti e falli subiti
@author Giuseppe Perna <giuseppeperna.cg@gmail.com>
*/

// RUN CODE AFTER DOM
$(document).ready( function() {

  // Array di oggetti team
  const teams = [
    {
      'nome': "Napoli",
      'punti': 0,
      'falliSubiti': 0
    },
    {
      'nome': "Genoa",
      'punti': 0,
      'falliSubiti': 0
    },
    {
      'nome': "Spal",
      'punti': 0,
      'falliSubiti': 0
    },
    {
      'nome': "Benevento",
      'punti': 0,
      'falliSubiti': 0
    }
  ];

  /*Generazione numeri random per le proprietà "punti" e "falli subiti"
  degli oggetti team*/
  for (let i = 0; i < teams.length; i++){
    teams[i].punti = Math.floor(Math.random() * 30);
    teams[i]['falliSubiti'] = Math.floor(Math.random() * 35);
  }
  console.log(teams);
})
