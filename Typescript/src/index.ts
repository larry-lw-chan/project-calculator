"use strict";
import { Calculator } from "./Calculator";

window.onload = () => {
  const calculator = new Calculator(
    document.querySelector("#screen")!,
    document.querySelectorAll("#keypads button.number")!,
    document.querySelectorAll("#keypads button.sign")!,
    document.querySelector("#keypads .dot")!,
    document.querySelector("#keypads #all-clear")!,
    document.querySelector("#keypads button[name='clear']")!,
    document.querySelector("#keypads .equal")!
  );
};
