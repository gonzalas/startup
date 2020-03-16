class Movie {
    constructor(title, year, duration) {
        this.title = title;
        this.year = year;
        this.duration = duration;
    }

    play() {
        return `${this.title} is now playing.`;
    }

    pause() {
        return `${this.title} is paused.`;
    }

    resume() {
        return `${this.title} is resumed.`;
    }
}

const movie1 = new Movie("Men of Honor", 2000, 129);
const movie2 = new Movie("Pulp Fiction", 1994, 154);
const movie3 = new Movie("Parasite", 2019, 132);

console.log("Title: " + movie1.title);
console.log("Year: " + movie1.year);
console.log("Duration: " + movie1.duration + " minutes");
console.log(movie1.play());

console.log("Title: " + movie2.title);
console.log("Year: " + movie2.year);
console.log("Duration: " + movie2.duration + " minutes");
console.log(movie2.pause());

console.log("Title: " + movie3.title);
console.log("Year: " + movie3.year);
console.log("Duration: " + movie3.duration + " minutes");
console.log(movie3.resume());

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