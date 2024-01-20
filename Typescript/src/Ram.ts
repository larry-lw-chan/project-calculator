export class Ram {
  storage: string;

  constructor() {
    this.storage = "";
  }

  getData() {
    return this.storage;
  }

  setData(text: string) {
    this.storage = text;
  }
}
