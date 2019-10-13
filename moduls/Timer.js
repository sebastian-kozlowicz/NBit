const _startTime = new WeakMap();
const _endTime = new WeakMap();

class Timer {
    constructor() {
        this.elapsedTime;
    }

    start() {
        _startTime.set(this, new Date);
    }

    stop() {
        _endTime.set(this, new Date);
        this.elapsedTime = (_endTime.get(this) - _startTime.get(this)) / 1000;
    }
}