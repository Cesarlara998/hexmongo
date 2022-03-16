export default class Date {
  public value: string;
  constructor(value) {
    this.value = value;
    if (typeof this.value !== "string") {
      throw new Error("Date String is required");
    }
  }
}
