"use strict";

export class Calculator {
  calStorage: string;

  constructor(
    public screen: Element,
    public numButtonList: NodeListOf<HTMLButtonElement>,
    public operandList: NodeListOf<HTMLButtonElement>,
    public dotBtn: HTMLButtonElement,
    public allClearBtn: HTMLButtonElement,
    public clearBtn: HTMLButtonElement,
    public eqlBtn: HTMLButtonElement
  ) {
    this.operandList = operandList;
    this.initialize();
  }

  // Assign all
  private initialize() {
    this.allClearDisplay();

    // Set Number Button Event Lisenters
    this.numButtonList.forEach((number) =>
      number.addEventListener("click", () => this.setNumber(number))
    );

    // Set Operand Button Event Lisenters
    this.operandList.forEach((operand) =>
      operand.addEventListener("click", () => this.setOperand(operand))
    );

    // Set Dot
    this.dotBtn.addEventListener("click", () => this.setDot());

    // Set All Clear
    this.allClearBtn.addEventListener("click", () => this.allClearDisplay());

    // Set Clear
    this.clearBtn.addEventListener("click", () => this.clearDisplay());

    // Set Equal
    this.eqlBtn.addEventListener("click", () => this.calculate());
  }

  calculate() {
    // Get list of items to process from calStorage
    let itemList = this.calStorage.split(" ");

    // Do Calculations
    let number = 0;
    let sign = "";

    for (let i in itemList) {
      let isNumber = /[0-9.]+/.test(itemList[i]);
      if (isNumber && sign === "") {
        number = Number(itemList[i]);
      } else if (!isNumber) {
        sign = itemList[i];
      } else {
        number = this.getCalculation(number, Number(itemList[i]), sign);
      }
    }

    // Round Up Number
    number = Math.round(number * 100) / 100;
    if (number.toString().length > 12) {
      this.calStorage = "Err: Num Too Big";
    }

    // Clear Calculator Store
    this.calStorage = `${number}`;
    this.updateDisplay();
  }

  getCalculation(num1, num2, sign) {
    switch (sign) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      case "%":
        return num1 % num2;
    }
  }

  private setNumber(number: HTMLButtonElement) {
    // If string is empty, simply add number to string
    if (this.calStorage.length === 0) {
      this.calStorage += number.name;
    } else {
      let lastIdx = this.calStorage.length - 1;
      let isNumber = /[0-9.]+/.test(this.calStorage[lastIdx]);
      if (isNumber) {
        this.calStorage += number.name;
      } else {
        this.calStorage += ` ${number.name}`;
      }
    }
    this.updateDisplay();
  }

  private setOperand(operand: HTMLButtonElement) {
    // Do nothing if there is no value
    if (this.calStorage.length === 0) return;

    // Check and see if last value is a number
    let lastIdx = this.calStorage.length - 1;
    let isNumber = /[0-9.]+/.test(this.calStorage[lastIdx]);

    if (isNumber) {
      this.calStorage += ` ${operand.name}`;
    } else {
      this.calStorage = this.calStorage.slice(0, lastIdx) + operand.name;
    }
    this.updateDisplay();
  }

  setDot() {
    // Do nothing if there is no initial number.
    if (this.calStorage.length === 0) return;

    // Check and see if last value is a number
    let itemList = this.calStorage.split(" ");
    let lastIdx = itemList.length - 1;
    let isDotlessNumber = /^[0-9]+$/.test(itemList[lastIdx]);

    // Add dot if existing number does not have preexisting dot
    if (isDotlessNumber) {
      this.calStorage = this.calStorage + ".";
    }
    this.updateDisplay();
  }

  private updateDisplay(text: string = this.calStorage) {
    this.screen.textContent = text;
  }

  private allClearDisplay() {
    this.calStorage = "";
    this.screen.textContent = "0";
  }

  clearDisplay() {
    if (this.calStorage.length === 0) {
      this.updateDisplay("0");
    } else {
      let lastIdx = this.calStorage.length - 1;
      let isNumber = /[0-9.]+/.test(this.calStorage[lastIdx]);
      // Slice to last index when number, if sign then slice one more
      if (isNumber) {
        this.calStorage = this.calStorage.slice(0, lastIdx);
      } else {
        this.calStorage = this.calStorage.slice(0, lastIdx - 1);
      }
      // Add a default 0 to display if calStorage is now empty
      if (this.calStorage.length === 0) {
        this.updateDisplay("0");
      } else {
        this.updateDisplay();
      }
    }
  }
}
