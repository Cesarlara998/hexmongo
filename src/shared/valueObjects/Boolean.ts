export default class Boolean {
    public value: string
    constructor(value) {
        this.value = value;
        if (typeof(this.value) !== "boolean") {
            throw new Error('Boolean is required')
        }
    }
}