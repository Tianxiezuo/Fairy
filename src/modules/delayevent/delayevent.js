class DelayEvent {
    constructor() {
        this.timer = 0;
        this.delayTime = 60;
    }

    delay(type, time) {
        this.type = type;
        this.delayTime = time;
        return this;
    }

    done(callback) {
        this.callback = callback;
        window.addEventListener(this.type, () => this.handler());
    }

    handler() {
        if (this.timer) {
            clearTimeout(this.timer)
        }
        this.timer = setTimeout(this.callback, this.delayTime)
    }
}

export default DelayEvent;
