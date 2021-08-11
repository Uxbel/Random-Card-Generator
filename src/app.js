/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const randomSuit = generateRandomSuit();
  document.getElementById("icoSup").classList.add(randomSuit);
  document.getElementById("icoBot").classList.add(randomSuit);
  document.getElementById("number").innerHTML = generateRandomNumber();
  document.getElementById("number").style.color =
    randomSuit == "diamond" || randomSuit == "heart" ? "red" : "black";
  document.getElementById("width").addEventListener("change", cardWidth);
  document.getElementById("height").addEventListener("change", cardHeight);
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["diamond", "spade", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};

let cardWidth = () => {
  var x = document.getElementById("width").value;

  document.getElementById("size").style.width = x + "px";
};

let cardHeight = () => {
  var x = document.getElementById("height").value;

  document.getElementById("size").style.height = x + "px";
};
