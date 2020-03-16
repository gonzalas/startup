"use strict";

var _EventEmitter = _interopRequireDefault(require("./EventEmitter.js"));

var _Movie = _interopRequireDefault(require("./Movie.js"));

var _Actor = _interopRequireDefault(require("./Actor.js"));

var _Logger = _interopRequireDefault(require("./Logger.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var movie1 = new _Movie["default"]("Men of Honor", 2000, 129);
var movie2 = new _Movie["default"]("Pulp Fiction", 1994, 154);
var movie3 = new _Movie["default"]("Parasite", 2019, 132);
var deNiro = new _Actor["default"]("Robert De Niro", 76);
var cuba = new _Actor["default"]("Cuba Gooding Jr.", 52);
var pulpActors = [new _Actor["default"]("John Travolta", 66), new _Actor["default"]("Samuel Jackson", 71), new _Actor["default"]("Bruce Willis", 64), new _Actor["default"]("Uma Thurman", 49)];
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
var logger = new _Logger["default"]();
movie1.on("play", logger.log("play"));
movie1.play();
var social = {
  share: function share(friendName) {
    console.log("".concat(friendName, " share ").concat(this.title));
  },
  like: function like(friendName) {
    console.log("".concat(friendName, " likes ").concat(this.title));
  }
};
Object.assign(movie1, social);
Object.assign(movie2, social);
movie1.share("Carl");
movie2.like("Paul");