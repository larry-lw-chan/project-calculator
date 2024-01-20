import { Button } from "./Button";

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
        number = this.calculate(number, Number(itemList[i]), sign);
      }
    }

    // Round Up Number
    number = Math.round(number * 100) / 100;
    if (number.toString().length > 12) {
      this.ram.setData("");
      this.display.setDisplay("Err: Num Too Big");
    } else {
      this.ram.setData(`${number}`);
      this.display.refresh();
    }
  }

  private calculate(num1: number, num2: number, sign: string): number {
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
