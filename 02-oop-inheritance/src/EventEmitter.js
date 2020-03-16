export default class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = callback;
        }
    }

    emit(eventName) {
        if (!this.events[eventName]) {
            console.log("No event to emit.");
            return;
        }
        this.events[eventName].call();
    }

    off(eventName) {
        if (this.events[eventName]) {
            delete this.events[eventName];
        }
    }
}