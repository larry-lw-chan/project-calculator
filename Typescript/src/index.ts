"use strict";
import { Calculator } from "./Calculator";

window.onload = () => {
  const numButtonList: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll("#keypads button.number");
  const signList: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
    "#keypads button.sign"
  );
  const allClear = document.querySelector("#keypads #all-clear");
  const clear = document.querySelector("#keypads button[name='clear']");
  const dotButton = document.querySelector("#keypads .dot");
  const equal = document.querySelector("#keypads .equal");

  let screen = document.querySelector("#screen");
  if (screen !== null) {
    const calculator = new Calculator(
      screen,
      numButtonList,
      signList,
      dotButton,
      allClear,
      clear,
      equal
    );
  }
};

// function initializeEvents() {
//   // Initialize Number Button Event Listener
//   const numButtonList = document.querySelectorAll("#keypads button.number");
//   numButtonList.forEach((button) =>
//     button.addEventListener("click", setNumber)
//   );

//   // Initialize All-Clear Display Event Listener
//   const allClear = document.querySelector("#keypads #all-clear");
//   allClear.addEventListener("click", allClearDisplay);

//   // Initialize Clear Display Event Handler
//   const clear = document.querySelector("#keypads button[name='clear']");
//   clear.addEventListener("click", clearDisplay);

//   // Initialize all signs
//   const signList = document.querySelectorAll("#keypads .sign");
//   signList.forEach((sign) => sign.addEventListener("click", setSigns));

//   // Initialize Dot
//   const dotButton = document.querySelector("#keypads .dot");
//   dotButton.addEventListener("click", setDot);

//   // Calculate
//   const equal = document.querySelector("#keypads .equal");
//   equal.addEventListener("click", calculate);
// }
