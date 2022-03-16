export default class Integer {
    public value: string
    constructor(value) {
        this.value = value;
        if (typeof(this.value) !== "number") {
            throw new Error('Integer is required')
        }
    }
}