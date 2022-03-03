const toggleMenu = function() {
  document.getElementById('toggleMenuContent').classList.toggle('show');
};

const changeColor = function(color, colorName) {
  document.body.style.backgroundColor = color;
  document.getElementById('colorText').innerHTML = 'The body is now ' + colorName;
  document.getElementById('toggleMenuContent').classList.remove('show');
};


//WERKEND!
//functie achtergrond standaardkleur te geven
const darkCyanBody = function (){
  const bodyElement = document.body;
  bodyElement.classList.add('startingColor');
  console.log('bg is startingcolor')
}

darkCyanBody();





///////////////////////////////////////////////////////////////////////

//functie om bij click een rode achtergrond te geven
//class darkRedBody CSS aangesproken om deze te togglen
// const darkRedBody = function(){
//   const bodyElement = document.body;
//   bodyElement.classList.toggle ('darkRedBody');
//   console.log('hallo')
// }

// const clickRed = function(){
//   const changeColor = document.getElementsById ('darkRed');
//   changeColor.addEventListener("click", function(){
//     darkRedBody();
//     console.log('hallo2');
//   })
// }

// clickRed;

//Beste docent, vraagje?
//Hierboven heb ik alles uitgecomment ik wilde graag de click functies volledig JS schrijven, helaas is lukte mij dit niet. Zou je mij hiervan tijdens de beoordeling kunnen vertellen hoe ik dit beter had moeten doen? Ik kwam niet verder als het eerste deel hierboven voor de rode knop. Alvast bedankt :) :)