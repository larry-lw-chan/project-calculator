import { Ram } from "./Ram";

interface Displayable {
  refresh(): void;
  setDisplay(text: string): void;
}

export class Display implements Displayable {
  constructor(public screen: Element, public ram: Ram) {
    this.setDisplay("0");
  }

  setDisplay(text: string) {
    this.screen.textContent = text;
  }

  refresh() {
    this.screen.textContent = this.ram.getData();
  }
}
