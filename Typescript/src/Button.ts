import { Display } from "./Display";
import { Ram } from "./Ram";

class Button {
  constructor(
    public button: HTMLButtonElement,
    public ram: Ram,
    public display: Display
  ) {
    this.button.addEventListener("click", () => this.push());
  }
  push() {}
}

export class NumberBtn extends Button {
  push() {
    let cache = this.ram.getData();
    // If string is empty, simply add number to string
    if (cache.length === 0) {
      this.ram.setData(this.button.name);
    } else {
      let lastIdx = cache.length - 1;
      let isNumber = /[0-9.]+/.test(cache[lastIdx]);
      cache += isNumber ? this.button.name : ` ${this.button.name}`; // Add a space if last character is an operand
      this.ram.setData(cache);
    }
    this.display.refresh();
  }
}

export class OperandBtn extends Button {
  push() {
    let cache = this.ram.getData();
    // Do nothing if there is no value
    if (cache.length === 0) return;

    // Check and see if last value is a number
    let lastIdx = cache.length - 1;
    let isNumber = /[0-9.]+/.test(cache[lastIdx]);

    if (isNumber) {
      cache += ` ${this.button.name}`;
    } else {
      cache = cache.slice(0, lastIdx) + this.button.name;
    }
    this.ram.setData(cache);
    this.display.refresh();
  }
}

export class DotBtn extends Button {
  push() {
    let cache = this.ram.getData();

    // Do nothing if there is no initial number.
    if (cache.length === 0) return;

    // Check and see if last value is a number
    let itemList = cache.split(" ");
    let lastIdx = itemList.length - 1;
    let isDotlessNumber = /^[0-9]+$/.test(itemList[lastIdx]);

    // Add dot if existing number does not have preexisting dot
    if (isDotlessNumber) {
      cache = cache + ".";
    }

    this.ram.setData(cache);
    this.display.refresh();
  }
}

export class AllClearBtn extends Button {
  push() {
    this.ram.setData("");
    this.display.setDisplay("0");
  }
}

export class ClearBtn extends Button {
  push() {
    let cache = this.ram.getData();

    if (cache.length > 0) {
      let lastIdx = cache.length - 1;
      let isNumber = /[0-9.]+/.test(cache[lastIdx]);

      // Slice to last index when number, if sign then slice one more
      if (isNumber) {
        this.ram.setData(cache.slice(0, lastIdx));
      } else {
        this.ram.setData(cache.slice(0, lastIdx - 1));
      }

      // Add a default 0 to display if calStorage is now empty
      if (this.ram.getData().length === 0) {
        this.display.setDisplay("0");
      } else {
        this.display.refresh();
      }
    }
  }
}

export class EqualBtn extends Button {
  push() {
    let cache = this.ram.getData();
    let itemList = cache.split(" ");

    // Do Calculations
    let number = 0;
    let sign = "";

    for (let i in itemList) {
      console.log(itemList[i]);
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
      this.ram.setData("Err: Num Too Big");
    }

    // Clear Calculator Store
    this.ram.setData(`${number}`);
    this.display.refresh();
  }

  private getCalculation(num1: number, num2: number, sign: string): number {
    switch (sign) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return num1 % num2;
    }
  }
}
