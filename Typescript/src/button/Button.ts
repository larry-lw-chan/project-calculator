import { Display } from "../Display";
import { Ram } from "../Ram";

export class Button {
  constructor(
    public button: HTMLButtonElement,
    public ram: Ram,
    public display: Display
  ) {
    this.button.addEventListener("click", () => this.push());
  }
  push() {}
}
