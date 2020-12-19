export class CountdownProperties {
    private countdownValue: number;
    interval: NodeJS.Timeout | null;

    constructor(initialValue: number) {
        this.countdownValue = initialValue;
        this.interval = null;
    }

    public resetValue() {
        this.countdownValue = 60*5;
    }

    public decrement() {
        this.countdownValue--;
    }

    get value(): number {
        return this.countdownValue;
    }
}
