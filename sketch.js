// Global Variables
let textToReplaceDOM;
let textToReplace = "";
let textReplacementDOM;
let textReplacement = "";
let userTextDOM;
let userText = "";
let newTextDOM;
let myButton;

function setup() {
  noCanvas();

  // DOM Assignment
  textToReplaceDOM = select(".textToReplace");
  textReplacementDOM = select(".textReplacement");
  userTextDOM = select(".text");
  newTextDOM = select(".newText");

  // Button Props
  myButton = select("#myButton");
  myButton.mousePressed(makeNewText);
}

function draw() {
  // Text Assignment
  textToReplace = new RegExp(textToReplaceDOM.value(), "gi");
  textReplacement = textReplacementDOM.value();
  userText = userTextDOM.value();
}

function makeNewText() {
  let newText = userTextDOM.value();
  newText = newText.replace(textToReplace, textReplacement);
  newTextDOM.value(newText);
}
