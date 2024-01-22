"use strict";
import { Display } from "./Display";
import { Ram } from "./Ram";
import {
  NumberBtn,
  OperandBtn,
  DotBtn,
  AllClearBtn,
  ClearBtn,
  EqualBtn,
} from "./button";

export class Calculator {
  ram: Ram;
  display: Display;

  constructor(
    screen: Element,
    numButtonList: NodeListOf<HTMLButtonElement>,
    operandList: NodeListOf<HTMLButtonElement>,
    dotBtn: HTMLButtonElement,
    allClearBtn: HTMLButtonElement,
    clearBtn: HTMLButtonElement,
    equalBtn: HTMLButtonElement
  ) {
    this.ram = new Ram();
    this.display = new Display(screen, this.ram);

    // Initialize Number
    numButtonList.forEach(
      (button) => new NumberBtn(button, this.ram, this.display)
    );

    // Initialize Operand
    operandList.forEach(
      (button) => new OperandBtn(button, this.ram, this.display)
    );

    // Initialize Remaining Buttons
    new DotBtn(dotBtn, this.ram, this.display);
    new AllClearBtn(allClearBtn, this.ram, this.display);
    new ClearBtn(clearBtn, this.ram, this.display);
    new EqualBtn(equalBtn, this.ram, this.display);
  }
}
