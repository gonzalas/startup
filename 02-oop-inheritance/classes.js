class Actor {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class EventEmitter {
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
        this.events[eventName] = e => {
            console.log("Emit " + e);
        };
    }

    off(eventName) {
        if (this.events[eventName]) {
            delete this.events[eventName];
        }
    }
}

class Movie extends EventEmitter {
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

const movie1 = new Movie("Men of Honor", 2000, 129);
const movie2 = new Movie("Pulp Fiction", 1994, 154);
const movie3 = new Movie("Parasite", 2019, 132);

const deNiro = new Actor("Robert De Niro", 76);
const cuba = new Actor("Cuba Gooding Jr.", 52);

const pulpActors = [
    new Actor("John Travolta", 66),
    new Actor("Samuel Jackson", 71),
    new Actor("Bruce Willis", 64),
    new Actor("Uma Thurman", 49)
];

movie1.addCast(deNiro);
movie1.addCast(cuba);
movie2.addCast(pulpActors);

console.log("Title: " + movie1.title);
console.log("Year: " + movie1.year);
console.log("Duration: " + movie1.duration + " minutes");
console.log("Cast: " + movie1.cast);
console.log(movie1.play());

console.log("Title: " + movie2.title);
console.log("Year: " + movie2.year);
console.log("Duration: " + movie2.duration + " minutes");
console.log("Cast: " + movie2.cast);
console.log(movie2.pause());

console.log("Title: " + movie3.title);
console.log("Year: " + movie3.year);
console.log("Duration: " + movie3.duration + " minutes");
console.log(movie3.resume());