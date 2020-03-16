import EventEmitter from "./EventEmitter.js";
import Movie from "./Movie.js";
import Actor from "./Actor.js";
import Logger from "./Logger.js";

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

console.log("Title: " + movie2.title);
console.log("Year: " + movie2.year);
console.log("Duration: " + movie2.duration + " minutes");
console.log("Cast: " + movie2.cast);

console.log("Title: " + movie3.title);
console.log("Year: " + movie3.year);
console.log("Duration: " + movie3.duration + " minutes");

const logger = new Logger();

movie1.on("play", logger.log("play"));
movie1.play();

const social = {
    share(friendName) {
        console.log(`${friendName} share ${this.title}`);
    },

    like(friendName) {
        console.log(`${friendName} likes ${this.title}`);
    }
};

Object.assign(movie1, social);
Object.assign(movie2, social);

movie1.share("Carl");
movie2.like("Paul");