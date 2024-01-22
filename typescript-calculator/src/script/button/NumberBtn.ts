import { Button } from "./Button";

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
