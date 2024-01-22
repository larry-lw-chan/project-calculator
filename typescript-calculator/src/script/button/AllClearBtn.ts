import { Button } from "./Button";

export class AllClearBtn extends Button {
  push() {
    this.ram.setData("");
    this.display.setDisplay("0");
  }
}
