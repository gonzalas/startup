export default class Movie extends EventEmitter {
    constructor(title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.cast = [];
    }

    play() {
        this.emit("play");
    }

    pause() {
        this.emit("pause");
    }

    resume() {
        this.emit("resume");
    }

    addCast(cast) {
        if (!Array.isArray(cast)) {
            this.cast.push(" " + cast.name);
        } else {
            for (let i = 0; i < cast.length; i++) {
                this.cast.push(" " + cast[i].name);
            }
        }
    }
}