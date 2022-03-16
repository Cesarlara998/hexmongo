export default class String {
    public value: string
    constructor(value) {
        this.value = value;
        if (!value) {
            throw new Error('string is required')
        }
    }
}