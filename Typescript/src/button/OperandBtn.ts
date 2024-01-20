import { Button } from "./Button";

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
