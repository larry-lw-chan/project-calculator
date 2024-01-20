import { Button } from "./Button";

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
