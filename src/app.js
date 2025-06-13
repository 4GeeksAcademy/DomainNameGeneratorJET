import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ['the', 'our', 'those'];
let adj = ['great', 'big', 'awesome'];
let noun = ['jogger', 'racoon', 'ladies'];


window.onload = function () {
  //write your code here
  console.log("Let's see if I'm doing this right. This should be in console log");

let output = document.querySelector('#domain');

for (let j = 0; j < pronoun.length; j++) {
  for (let e = 0; e < adj.length; e++) {
    for (let t = 0; t < noun.length; t++) {
      let combination = 'www.' + pronoun [j] + adj [e] + noun[t] + '.com';
      console.log(combination);
      output.innerHTML += combination + '<br>';
    }
  }
}
};