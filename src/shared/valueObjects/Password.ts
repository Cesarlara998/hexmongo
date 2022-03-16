export default class Password {
    public value: string
    constructor(value) {
        this.value = value;
        if (!value) {
            throw new Error('Password is required')
        }
    }
}