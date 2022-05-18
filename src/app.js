/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = () => {
  //write your code here
  let randText = document.getElementById("pepers");
  function genSentence() {
    let whoRan = Math.floor(Math.random() * who.length);
    let actionRan = Math.floor(Math.random() * action.length);
    let whatRan = Math.floor(Math.random() * what.length);
    let whenRan = Math.floor(Math.random() * when.length);

    randText.innerHTML =
      who[whoRan] +
      " " +
      action[actionRan] +
      " " +
      what[whatRan] +
      " " +
      when[whenRan];
  }
  genSentence();
  let newButton = document.getElementById("refreshButton");
  newButton.onclick = function() {
    genSentence();
  };
  console.log("Hello Rigo from the console!");
};
