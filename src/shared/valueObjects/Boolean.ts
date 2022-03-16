export default class Integer {
    public value: string
    constructor(value) {
        this.value = value;
        if (typeof(this.value) !== "boolean") {
            throw new Error('Boolean is required')
        }
    }
}